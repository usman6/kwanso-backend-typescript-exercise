import * as TaskRouter from "../routers/task-controller";
import * as UserRouter from "../routers/user-controller";

function registerControllers(app, authMiddleware) {
    app.use('/', authMiddleware, TaskRouter.router);
    app.use('/', authMiddleware, UserRouter.router);

}


export { registerControllers };