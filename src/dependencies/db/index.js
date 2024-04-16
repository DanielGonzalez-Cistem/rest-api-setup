//* Centralización de elementos db
const { sequelize } = require('./connection');
const models = require('./models');
const useCases = require('./use_cases');
const { verifyConnection } = require('./verify_connection');

module.exports = {
    models,
    sequelize,
    useCases,
    verifyConnection
}