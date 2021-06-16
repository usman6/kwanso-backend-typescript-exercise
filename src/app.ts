import express from 'express';
import { registerControllers } from './startup/register-controllers';
import { authMiddleware } from './middleware';

const app = express();

app.use(express.json());

registerControllers(app, authMiddleware);

export { app };

