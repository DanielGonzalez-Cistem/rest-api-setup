//* ✅ Notaciones JS DOCS globalizadas

//? Comentación de variables de entorno
/**
 * @typedef {object} EnvScheme - Esquema de variables de entorno.
 * @property {NodeEnv} NODE_ENV - Tipo Entorno.
 * @property {string} VERSION - Versión de producto.
 * @property {string} APP_PORT - Puerto de aplicación APP.
 * @property {string} AUTH_PORT - Puerto de aplicación AUTH.
 * @property {string} HOST - Host de aplicación en modo HTTPS.
 * @property {string} SSL_KEY - Certificado SSL `.key`.
 * @property {string} SSL_CERT - Certificado SSL `.cert` o `.crt`.
 * @property {string} DB_HOST - Host de la base de datos.
 * @property {string} DB_USER - Usuario de conexión de base de datos.
 * @property {string} DB_PWD - Contraseña de conexión de base de datos.
 * @property {string} DB_NAME - Nombre de base de datos.
 * @property {string} DB_PORT - Purto de conexión de base de datos.
 * @property {string} DB_ENCRYPT - Habilita el cifrado de la conexión a base de datos.
 * @property {string} DB_LOGS - Habilita los logs de consultas a base de datos.
 */

/**
 * @typedef {'development' | 'production'} NodeEnv
 */