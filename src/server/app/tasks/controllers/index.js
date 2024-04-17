//* Centralización de controladores
const { CreateTaskControllerWrapper } = require('./create.task.controller');
const { TasksControllerWrapper } = require('./tasks.controller');

module.exports = {
    CreateTaskControllerWrapper,
    TasksControllerWrapper,
}