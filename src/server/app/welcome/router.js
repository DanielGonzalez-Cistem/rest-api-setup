//* Importaciones
const { Router } = require('express');

//* Controladores
const { WelcomeControllerWrapper } = require('./controllers');

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

    welcomeRouter.get(paths.welcome, WelcomeControllerWrapper(dependencies));

    return welcomeRouter;

}

module.exports = { WelcomeRouterWrapper };