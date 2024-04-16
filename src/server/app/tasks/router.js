//* Importaciones
const { Router } = require('express');

//* Controladores
const { 
    TasksControllerWrapper 
} = require('./controllers');

const TasksRouterWrapper = ( dependencies ) => {

    const tasksRouter = Router();

    const paths = {
        get_all_tasks: '/tasks',
    };

    tasksRouter.get(paths.get_all_tasks, TasksControllerWrapper(dependencies));

    return tasksRouter;

}

module.exports = { TasksRouterWrapper };