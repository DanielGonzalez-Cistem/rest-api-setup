//* Importaciones
const { statusCode } = require('../../utils');

/**
 * @constant {object} Repositorio de errores.
 */
const repositoryErrors = {
    SERVER_ERROR: ( error ) => {
        return {
            success: false,
            status_code: statusCode.INTERNAL_SERVER_ERROR,
            error: {
                code: 'B01',
                message: 'Opp... estamos experimentando problemas en el servidor, estamos trabajando en ello',
                details: {
                    error_name: error.name,
                    error_message: error.message,
                    error_stack: error.stack,
                }
            }
        }
    },
    SERVICE_NOT_FOUND: ( url ) => {
        return {
            success: false,
            status_code: statusCode.NOT_FOUND,
            error: {
                code: 'B02',
                message: `El servicio '${ url }' que intenta consultar no esta disponible`
            }
        }
    },
    VALIDATE_ERROR: ( error ) => {
        return {
            success: false,
            status_code: statusCode.BAD_REQUEST,
            error: {
                code: 'B03',
                message: error
            }
        }
    },
};

module.exports = { repositoryErrors };