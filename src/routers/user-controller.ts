import express from 'express';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { users } from './../storage/in-memory-storage';
import { FindUserByEmail } from './../utils/FindUserByEmail';

const router = express.Router();

router.get('/user', async (req, res, next) => {

    try {
        return res.send({ user: res.locals.user });
    } catch (err) {
        next(err);
    }

});

router.post('/register', async (req, res, next) => {

    try {

        const { error, value } = validateUser(req.body);
        if (error) {
            return res.status(400).send(error);
        }

        const exists = FindUserByEmail(value.email);
        if (exists) {
            return res.status(409).send({ email: value.email });
        }
        value.password = await bcrypt.hash(value.password, 10);
        users.push({
            "id": users.length,
            ...value
        });
        return res.json({ user: { id: users.length - 1, email: users[users.length - 1]['email'] } });
    } catch (err) {
        next(err);
    }

});

router.post('/login', async (req, res, next) => {

    try {
        const { error, value } = validateUser(req.body);
        if (error) {
            return res.status(400).send(error);
        }

        const user = FindUserByEmail(value.email);
        if (!user) {
            return res.status(401).send({ user: value.email });
        }
        if (!(await bcrypt.compare(value.password, user.password))) {
            return res.status(401).send({ user: value.email });
        }
        //sign the token with 1 hour of expiry
        const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), ...user }, 'secret')
        return res.send({ jwt: token });
    } catch (err) {
        next(err);
    }

});

function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().trim().max(255).required(),
    });

    return schema.validate(user);
}

export { router };