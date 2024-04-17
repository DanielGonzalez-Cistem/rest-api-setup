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
    TASK_NOT_FOUND: () => {
        return {
            success: false,
            status_code: statusCode.NOT_FOUND,
            error: {
                code: 'B04',
                message: `La tarea que intenta consultar no esta disponible`
            }
        }
    },
    STATUS_CONFLICT: () => {
        return {
            success: false,
            status_code: statusCode.BAD_REQUEST,
            error: {
                code: 'B05',
                message: `El estado de tarea proporcionado no es válido`
            }
        }
    },
};

module.exports = { repositoryErrors };