//* Centralización de utils
const { deployServer } = require('./deploy_server');
const { generateLogs } = require('./generate_logs');
const { statusCode } = require('./http_status_code');

module.exports = {
    deployServer,
    generateLogs,
    statusCode
}