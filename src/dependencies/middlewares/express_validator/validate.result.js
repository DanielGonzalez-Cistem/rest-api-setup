//* Importaciones
const { validationResult } = require('express-validator');
const { Exception } = require('../../http_error');

/**
 * Middleware que generá errores de express-validator.
 * 
 * @function
 * @name validateResult
 * @param {*} req - Referencia de la petición entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Función que continua el flujo de la aplicación.
 * @returns Error de validación.
 */
const validateResult = ( req, res, next ) => {

    const errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        const firstErrors = errors.array()[0];
        return next( new Exception('VALIDATE_ERROR', firstErrors.msg) );
    }

    next();

}

module.exports = { validateResult };