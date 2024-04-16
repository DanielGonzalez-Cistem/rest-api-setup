//* Importaciones
const { TasksServiceWrapper } = require('../services');

/**
 * Envoltorio que habilita el controlador de prueba de conexión APP.
 * 
 * @function
 * @name TasksControllerWrapper
 * @param {DependenciesScheme} dependencies - Lista de Dependencias. 
 * @returns TasksController
 */
const TasksControllerWrapper = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { db, utils } = dependencies;
    const { useCases } = db;
    const { statusCode } = utils;

    //? Centralización de servicios
    const services = {
        // tasks: TasksServiceWrapper.(useCases),
        tasks: TasksServiceWrapper(useCases)
    }

    /**
     * Controlador que obtiene una lista de tareas.
     * 
     * @function
     * @name TasksController
     * @param {*} req - Referencia de la petición entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const TasksController = async (req, res, next) => {

        try {
            
            //? Invación de servicio
            const tasks = await services.tasks();

            res.status(statusCode.OK);
            res.json({
                success: true,
                status_code: statusCode.OK,
                response: tasks
            });
            res.end();

        } catch (ErrorController) {

            console.log('❌ TASK_CONTROLLER_ERROR: ', ErrorController);
            next(ErrorController);        

        }

    }

    return TasksController;

}

module.exports = { TasksControllerWrapper };