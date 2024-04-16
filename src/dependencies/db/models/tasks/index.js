//* Importaciones
const { sequelize } = require('../../connection');
const { DataTypes } = require('sequelize');
const { TaskStatus } = require('../task_status');
const { Users } = require('../users');

const modelConfig = {
    tableName: 'Tasks',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}

const Tasks = sequelize.define('tasks', {
    id_task: {
        field: 'id_task',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    uuid_task: {
        field: 'uuid_task',
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    title: {
        field: 'title',
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    task_description: {
        field: 'task_description',
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    id_user: {
        field: 'id_user',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_task_status: {
        field: 'id_task_status',
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
}, modelConfig);

Tasks.belongsTo(Users, { foreignKey: 'id_user' }); //? 👈🏻 Relación Uno a Uno
Tasks.belongsTo(TaskStatus, { foreignKey: 'id_task_status' }); //? 👈🏻 Relación Uno a Uno


module.exports = { Tasks };