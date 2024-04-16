//* Centralización de dependencias
const db = require('./db');
const httpError = require('./http_error');
const utils = require('./utils');

module.exports = {
    db,
    httpError,
    utils,
}