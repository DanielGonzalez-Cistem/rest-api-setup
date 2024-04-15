//* ✅ Notaciones JS DOCS globalizadas

//? Comentación de variables de entorno
/**
 * @typedef {'development' | 'production'} NodeEnv
 */

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

//? Comentación de Dependencias

/**
 * @typedef {object} StatusCodeScheme - Esquema de Códigos de Estado HTTP
 * @property {number} BAD_REQUEST - La petición no cumple con algún criterio especifícado.
 * @property {number} CREATED - El recurso se ha creado con éxito.
 * @property {number} FORBIDDEN - El cliente no cuenta con permisos suficientes para acceder al recurso.
 * @property {number} INTERNAL_SERVER_ERROR - Ha ocurrido un error en el servidor.
 * @property {number} NOT_FOUND - El recurso no ha sido encontrado.
 * @property {number} OK - El recurso se ha realizado con éxito.
 * @property {number} UNAUTHORIZED - El cliente no cuenta con la atenticación requerida.
 */

/**
 * @typedef {object} UtilsScheme - Esquema de Utils
 * @property {Function} deployServer - Función que habilita la publicación de servidores API.
 * @property {StatusCodeScheme} statusCode - Lista de códigos de estado HTTP.
 */

/**
 * @typedef {object} DependenciesScheme - Esquema de dependencias.
 * @property {UtilsScheme} utils - Centralización de utilidades.
 */