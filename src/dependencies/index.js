//* Centralización de dependencias
const db = require('./db');
const helpers = require('./helpers');
const httpError = require('./http_error');
const middlewares = require('./middlewares');
const utils = require('./utils');

module.exports = {
    db,
    helpers,
    httpError,
    middlewares,
    utils,
}