import jwt from 'jsonwebtoken';

import { FindUserByEmail } from './../utils/FindUserByEmail';

const publicEndpoints = [
    '/register',
    '/login'
];

export const authMiddleware = async (req: any, res: any, next: any): Promise<any> => {

    try {
        if (publicEndpoints.includes(req.originalUrl.split('?')[0])) {
            return next();
        }

        let user = await authenticateUser(req.headers['authorization'].split(' ')[1], res);

        let result = FindUserByEmail(user.email);

        if (!result) {
            return res.status(401).send({ message: 'User not found' });
        }

        res.locals.user = user;

        return next();

    } catch (err) {
        return res.status(401).send();
    }

};

async function authenticateUser(token, res) {
    try {
        const result = jwt.verify(token, 'secret');
        return { id: result['id'], email: result['email'] };
    }
    catch (e) {
        return res.status(401).send();
    }

}