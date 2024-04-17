//* Importaciones
const { CreateTaskServiceWrapper } = require('../services');

/**
 * Envoltorio que habilita el controlador de prueba de conexión APP.
 * 
 * @function
 * @name CreateTaskControllerWrapper
 * @param {DependenciesScheme} dependencies - Lista de Dependencias. 
 * @returns CreateTaskController
 */
const CreateTaskControllerWrapper = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { db, helpers, utils } = dependencies;
    const { useCases } = db;
    const { statusCode } = utils;

    //? Centralización de servicios
    const services = {
        createTasks: CreateTaskServiceWrapper(helpers, useCases)
    }

    /**
     * Controlador que obtiene una lista de tareas.
     * 
     * @function
     * @name CreateTaskController
     * @param {*} req - Referencia de la petición entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const CreateTaskController = async (req, res, next) => {

        try {
            
            //? Invación de servicio
            const isSaved = await services.createTasks( req.body );
            
            if ( isSaved ) {
                
                res.status(statusCode.CREATED);
                res.json({
                    success: true,
                    status_code: statusCode.CREATED,
                });
                res.end();

            }

        } catch (ErrorController) {

            console.log('❌ CREATE_TASK_CONTROLLER_ERROR: ', ErrorController);
            next(ErrorController);        

        }

    }

    return CreateTaskController;

}

module.exports = { CreateTaskControllerWrapper };