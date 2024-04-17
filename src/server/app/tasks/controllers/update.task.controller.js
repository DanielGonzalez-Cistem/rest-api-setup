//* Importaciones
const { UpdateTaskServiceWrapper } = require('../services');

/**
 * Envoltorio que habilita el controlador de para obtener una sola tarea.
 * 
 * @function
 * @name UpdateTaskControllerWrapper
 * @param {DependenciesScheme} dependencies - Lista de Dependencias. 
 * @returns TaskController
 */
const UpdateTaskControllerWrapper = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpError, db, utils } = dependencies;
    const { useCases } = db;
    const { statusCode } = utils;
    const { Exception } = httpError;

    //? Centralización de servicios
    const services = {
        updateTask: UpdateTaskServiceWrapper(Exception, useCases)
    }

    /**
     * Controlador que actualiza una tarea.
     * 
     * @function
     * @name UpdateTaskController
     * @param {*} req - Referencia de la petición entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const UpdateTaskController = async (req, res, next) => {

        try {
            
            //? Invación de servicio
            const isUpdated = await services.updateTask(req.params.id, req.body);

            if ( isUpdated ) {

                res.status(statusCode.OK);
                res.json({
                    success: true,
                    status_code: statusCode.OK,
                });
                res.end();

            }

        } catch (ErrorController) {

            // console.log('❌ UPDATE_TASK_CONTROLLER_ERROR: ', ErrorController);
            next(ErrorController);        

        }

    }

    return UpdateTaskController;

}

module.exports = { UpdateTaskControllerWrapper };