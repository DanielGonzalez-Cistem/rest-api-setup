//* Importaciones
const { sequelize } = require('../../connection');
const { DataTypes } = require('sequelize');

const modelConfig = {
    tableName: 'UserStatus',
    timestamps: true,
    created_at: 'created_at',
    updated_at: 'updated_at'
}

const UserStatus = sequelize.define('user-status', {
    id_user_status: {
        field: 'id_user_status',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    uuid_user_status: {
        field: 'uuid_user_status',
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    user_status_name: {
        field: 'user_status_name',
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, modelConfig);

module.exports = { UserStatus };