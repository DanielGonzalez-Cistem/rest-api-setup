//* Importaciones
const { sequelize } = require('../../connection');
const { DataTypes } = require('sequelize');
const { UserStatus } = require('../user_status');

const modelConfig = {
    tableName: 'Users',
    timestamps: true,
    created_at: 'created_at',
    updated_at: 'updated_at'
}

const Users = sequelize.define('users', {
    id_user: {
        field: 'id_user',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    uuid_user: {
        field: 'uuid_user',
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    username: {
        field: 'username',
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        field: 'email',
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    user_password: {
        field: 'user_password',
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    id_user_status: {
        field: 'id_user_status',
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
}, modelConfig);

Users.belongsTo(UserStatus, { foreignKey: 'id_user_status' }); //? 👈🏻 Relación Uno a Uno

module.exports = { Users };