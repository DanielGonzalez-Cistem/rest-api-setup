//* Centralización de servicios
const { CreateTaskServiceWrapper } = require('./create.task.service');
const { TasksServiceWrapper } = require('./tasks.service');

module.exports = {
    CreateTaskServiceWrapper,
    TasksServiceWrapper
}