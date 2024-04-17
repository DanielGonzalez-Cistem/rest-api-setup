//* Centralización de servicios
const { CreateTaskServiceWrapper } = require('./create.task.service');
const { TaskServiceWrapper } = require('./task.service');
const { TasksServiceWrapper } = require('./tasks.service');

module.exports = {
    CreateTaskServiceWrapper,
    TaskServiceWrapper,
    TasksServiceWrapper
}