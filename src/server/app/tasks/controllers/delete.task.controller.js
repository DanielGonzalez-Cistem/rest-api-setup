//* Importaciones
const { DeleteTaskServiceWrapper } = require('../services');

/**
 * Envoltorio que habilita el controlador de para obtener una sola tarea.
 * 
 * @function
 * @name DeleteTaskControllerWrapper
 * @param {DependenciesScheme} dependencies - Lista de Dependencias. 
 * @returns DeleteTaskController
 */
const DeleteTaskControllerWrapper = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpError, db, utils } = dependencies;
    const { useCases } = db;
    const { Exception } = httpError;
    const { statusCode } = utils;

    //? Centralización de servicios
    const services = {
        deleteTask: DeleteTaskServiceWrapper(Exception, useCases)
    }

    /**
     * Controlador que elimina una tarea.
     * 
     * @function
     * @name DeleteTaskController
     * @param {*} req - Referencia de la petición entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const DeleteTaskController = async (req, res, next) => {

        try {
            
            //? Invación de servicio
            const isDeleted = await services.deleteTask(req.params.id);

            if ( isDeleted ) {

                res.status(statusCode.OK);
                res.json({
                    success: true,
                    status_code: statusCode.OK,
                });
                res.end();

            }

        } catch (ErrorController) {

            // console.log('❌ TASK_CONTROLLER_ERROR: ', ErrorController);
            next(ErrorController);        

        }

    }

    return DeleteTaskController;

}

module.exports = { DeleteTaskControllerWrapper };