/**
 * Envoltorio que habilita el controlador de prueba de conexión APP.
 * 
 * @function
 * @name WelcomeControllerWrapper
 * @param {DependenciesScheme} dependencies - Lista de Dependencias. 
 * @returns 
 */
const WelcomeControllerWrapper = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { utils } = dependencies;
    const { statusCode } = utils;

    /**
     * Controlador que emite una prueba de conexión en el entorno APP.
     * 
     * @function
     * @name WelcomeController
     * @param {*} req - Referencia de la petición entrante.
     * @param {*} res - Referencia para retornar una respuesta.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const WelcomeController = async (req, res, next) => {

        try {
            
            //NOTE: Eliminar 👇🏻 código, después de la generación de logs de errores...
            // TestAbc();
            res.status(statusCode.OK);
            res.json({
                message: 'Bienvenido a rest-api-setup :D',
                server: 'App'
            });
            res.end();
    
        } catch (ErrorController) {
            // console.log('❌ WELCOME_CONTROLLER_ERROR: ', ErrorController);
            next(ErrorController);        
        }

    };

    return WelcomeController;

}

module.exports = { WelcomeControllerWrapper };