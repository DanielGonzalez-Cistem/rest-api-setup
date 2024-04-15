//* Importaciones
const { Router } = require('express');

//* Controladores
const { WelcomeWrapper } = require('./controllers');

/**
 * Envoltorio que habilita el enrutador de prueba de conexión APP.
 * 
 * @function
 * @name WelcomeRouterWrapper
 * @param {DependenciesScheme} dependencies - Lista de Dependencias. 
 * @returns 
 */
const WelcomeRouterWrapper = ( dependencies ) => {

    const welcomeRouter = Router();

    const paths = {
        welcome: '/welcome'
    };

    welcomeRouter.get(paths.welcome, WelcomeWrapper(dependencies));

    return welcomeRouter;

}


// module.exports = { appRouter };
module.exports = { WelcomeRouterWrapper };