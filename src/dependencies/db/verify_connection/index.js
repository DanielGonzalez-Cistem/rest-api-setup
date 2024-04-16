//* Importaciones
const { sequelize } = require('../connection');

/**
 * Realiza una prueba de conexión a base de datos.
 * 
 * @function
 * @name verifyConnection
 * @param {*} req - Referencia de la petición entrante.
 * @param {*} res - Referencia para retornar una respuesta.
 * @param {*} next - Función que continua el flujo de la aplicación.
 */
const verifyConnection = async ( req, res, next ) => {

    try {
    
        await sequelize.authenticate();
        next();

    } catch (ErrorConnection) {
        next(ErrorConnection);
    }

}

module.exports = {
   verifyConnection
}