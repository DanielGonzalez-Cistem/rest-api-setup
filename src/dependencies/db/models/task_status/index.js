//* Importaciones
const { sequelize } = require('../../connection');
const { DataTypes } = require('sequelize');

const modelConfig = {
    tableName: 'TaskStatus',
    timestamps: true,
    created_at: 'created_at',
    updated_at: 'updated_at'
}

const TaskStatus = sequelize.define('task-status', {
    id_task_status: {
        field: 'id_task_status',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    uuid_task_status: {
        field: 'uuid_task_status',
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    task_status_name: {
        field: 'task_status_name',
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, modelConfig);

module.exports = { TaskStatus };