//* Centralización de servicios
const { CreateTaskServiceWrapper } = require('./create.task.service');
const { DeleteTaskServiceWrapper } = require('./delete.task.service');
const { TaskServiceWrapper } = require('./task.service');
const { TasksServiceWrapper } = require('./tasks.service');
const { UpdateTaskServiceWrapper } = require('./update.task.service');

module.exports = {
    CreateTaskServiceWrapper,
    DeleteTaskServiceWrapper,
    TaskServiceWrapper,
    TasksServiceWrapper,
    UpdateTaskServiceWrapper
}