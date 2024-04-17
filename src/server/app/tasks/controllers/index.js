//* Centralización de controladores
const { CreateTaskControllerWrapper } = require('./create.task.controller');
const { DeleteTaskControllerWrapper } = require('./delete.task.controller');
const { TaskControllerWrapper } = require('./task.controller');
const { TasksControllerWrapper } = require('./tasks.controller');
const { UpdateTaskControllerWrapper } = require('./update.task.controller');

module.exports = {
    CreateTaskControllerWrapper,
    DeleteTaskControllerWrapper,
    TaskControllerWrapper,
    TasksControllerWrapper,
    UpdateTaskControllerWrapper
}