//* Centralización de utils
const { deployServer } = require('./deploy_server');
const { statusCode } = require('./http_status_code');

module.exports = {
    deployServer,
    statusCode
}