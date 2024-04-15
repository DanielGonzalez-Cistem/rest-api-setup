//* Importaciones
const { Exception } = require('../utils');

/**
 * Controla las peticiones entrantes de servicios no encontrados en la aplicación.
 * 
 * @function
 * @name ServiceNotFound
 * @param {*} req - Referencia de la petición entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Función que continua el flujo de la aplicación.
 */
const ServiceNotFound = ( req, res, next ) => {
    return next( new Exception('SERVICE_NOT_FOUND', req.url) );
}

module.exports = { ServiceNotFound };