import express from 'express';
import Joi from 'joi';

import { tasks } from './../storage/in-memory-storage';

const router = express.Router();

router.get('/list-tasks', async (req, res, next) => {

    try {
        const currentTasks = tasks[res.locals.user.id];

        if (!currentTasks || currentTasks.length == 0) {
            return res.status(404).send();
        }

        res.json({ tasks: currentTasks });
    } catch (err) {
        next(err);
    }

});

router.post('/create-task', async (req, res, next) => {

    try {
        const { error, value } = validateTask(req.body);
        if (error) {
            return res.status(400).send(error);
        }

        const currentTasks = tasks[res.locals.user.id];

        if (!currentTasks) {
            tasks[res.locals.user.id] = [{ id: 1, ...value }];
            return res.json({ task: tasks[res.locals.user.id][0] });
        }
        else {
            currentTasks.push({ id: currentTasks.length + 1, ...value });
            tasks[res.locals.user.id] = currentTasks;
            return res.json({ task: currentTasks[currentTasks.length - 1] });
        }
    } catch (err) {
        next(err);
    }

});

function validateTask(task) {
    const schema = Joi.object({
        name: Joi.string().trim().max(255).required()
    });

    return schema.validate(task);
}

export { router };
