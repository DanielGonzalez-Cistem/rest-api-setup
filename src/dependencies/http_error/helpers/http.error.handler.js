//* Importaciones
const { repositoryErrors } = require('../utils');

/**
 * Centraliza los errores que se generán en la aplicación.
 * 
 * @function
 * @name HttpErrorHandler
 * @param {*} error - Definición del error a controlar.
 * @param {*} req - Referencia de la petición entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Función que continua el flujo de la aplicación.
 */
const HttpErrorHandler = ( error, req, res, next) => {

    let setError = {};

    if ( error.name in repositoryErrors ) {
        
         setError = error.additionalValue === undefined
            ? repositoryErrors[error.name]()
            : repositoryErrors[error.name](error.additionalValue);

    } else {

        setError = repositoryErrors.SERVER_ERROR(error);
        //TODO: Integrar captura de errores en un log...

    }

    res.status(setError.status_code);
    res.json(setError);
    res.end();

}

module.exports = { HttpErrorHandler };