//* Centralización de elementos db
const { sequelize } = require('./connection');
const models = require('./models');
const { verifyConnection } = require('./verify_connection');

module.exports = {
    models,
    sequelize,
    verifyConnection
}