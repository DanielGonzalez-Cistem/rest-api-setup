//* Importaciones
const { Router } = require('express');

//* Controladores
const { 
    CreateTaskControllerWrapper,
    TasksControllerWrapper,
    TaskControllerWrapper,
    UpdateTaskControllerWrapper 
} = require('./controllers');

//* Reglas
const { 
    CreateTaskRuleWrapper,
    TaskRuleWrapper,
    UpdateTaskRuleWrapper 
} = require('./rules');

const TasksRouterWrapper = ( dependencies ) => {

    const tasksRouter = Router();

    const paths = {
        get_all_tasks: '/tasks',
        get_task     : '/task/:id',
        create_task  : '/task',
        update_task  : '/task/:id'
    };

    tasksRouter.get(
        paths.get_all_tasks,
        TasksControllerWrapper(dependencies)
    );

    tasksRouter.get(
        paths.get_task,
        TaskRuleWrapper(dependencies.middlewares),
        TaskControllerWrapper(dependencies)
    )

    tasksRouter.post(
        paths.create_task,
        CreateTaskRuleWrapper(dependencies.middlewares),
        CreateTaskControllerWrapper(dependencies)
    );

    tasksRouter.patch(
        paths.update_task,
        [
            TaskRuleWrapper(dependencies.middlewares),
            UpdateTaskRuleWrapper(dependencies.middlewares)
        ],
        UpdateTaskControllerWrapper(dependencies)
    );

    return tasksRouter;

}

module.exports = { TasksRouterWrapper };