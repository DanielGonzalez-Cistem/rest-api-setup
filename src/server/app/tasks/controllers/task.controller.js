//* Importaciones
const { TaskServiceWrapper } = require('../services');

/**
 * Envoltorio que habilita el controlador de para obtener una sola tarea.
 * 
 * @function
 * @name TaskControllerWrapper
 * @param {DependenciesScheme} dependencies - Lista de Dependencias. 
 * @returns TaskController
 */
const TaskControllerWrapper = ( dependencies ) => {

    //? Desestructuración de dependencias1
    const { db, httpError, utils } = dependencies;
    const { useCases } = db;
    const { Exception } = httpError;
    const { statusCode } = utils;

    //? Centralización de servicios
    const services = {
        task: TaskServiceWrapper(Exception, useCases)
    }

    /**
     * Controlador que obtiene una tarea.
     * 
     * @function
     * @name TaskController
     * @param {*} req - Referencia de la petición entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const TaskController = async (req, res, next) => {

        try {
            
            //? Invación de servicio
            const task = await services.task(req.params.id);

            res.status(statusCode.OK);
            res.json({
                success: true,
                status_code: statusCode.OK,
                response: task
            });
            res.end();

        } catch (ErrorController) {

            // console.log('❌ TASK_CONTROLLER_ERROR: ', ErrorController);
            next(ErrorController);        

        }

    }

    return TaskController;

}

module.exports = { TaskControllerWrapper };