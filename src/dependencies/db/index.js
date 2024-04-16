//* Centralización de elementos db
const { sequelize } = require('./connection');
const { verifyConnection } = require('./verify_connection');

module.exports = {
    sequelize,
    verifyConnection
}