//* Centralización de reglas
const { CreateTaskRuleWrapper } = require('./create.task.rule');
const { TaskRuleWrapper } = require('./task.rule');
const { UpdateTaskRuleWrapper } = require('./update.task.rule');

module.exports = {
    CreateTaskRuleWrapper,
    TaskRuleWrapper,
    UpdateTaskRuleWrapper
}