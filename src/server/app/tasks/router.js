//* Importaciones
const { Router } = require('express');

//* Controladores
const { 
    CreateTaskControllerWrapper,
    TasksControllerWrapper 
} = require('./controllers');

//* Reglas
const { 
    CreateTaskRuleWrapper 
} = require('./rules');

const TasksRouterWrapper = ( dependencies ) => {

    const tasksRouter = Router();

    const paths = {
        get_all_tasks: '/tasks',
        create_task  : '/task'
    };

    tasksRouter.get(
        paths.get_all_tasks, 
        TasksControllerWrapper(dependencies)
    );

    tasksRouter.post(
        paths.create_task, 
        CreateTaskRuleWrapper(dependencies.middlewares),
        CreateTaskControllerWrapper(dependencies)
    );

    return tasksRouter;

}

module.exports = { TasksRouterWrapper };