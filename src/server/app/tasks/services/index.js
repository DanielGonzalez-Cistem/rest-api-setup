//* Centralización de servicios
const { CreateTaskServiceWrapper } = require('./create.task.service');
const { TaskServiceWrapper } = require('./task.service');
const { TasksServiceWrapper } = require('./tasks.service');
const { UpdateTaskServiceWrapper } = require('./update.task.service');

module.exports = {
    CreateTaskServiceWrapper,
    TaskServiceWrapper,
    TasksServiceWrapper,
    UpdateTaskServiceWrapper
}