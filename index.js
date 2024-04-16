//* Variables de entorno globalizados
require('dotenv/config');

//* Importaciones
const { AppServer } = require('./src/server/app/config');
const { AuthServer } = require('./src/server/auth/config');
const { db } = require('./src/dependencies');


const mainApp = () => {

    /**
     * @type {EnvScheme} - Esquema de variables de entorno.
     */
    const envs = process.env;

    const appServer = new AppServer();
    const authServer = new AuthServer();

    appServer.deploy();
    authServer.deploy();

    console.log(`✨ rest-api-setup v${ envs.VERSION } ha sido inicializado...`);
    console.log(envs.NODE_ENV === 'development' ? '✅ Publicando servidor HTTP...\n' : '✅ Publicando servidor HTTPS...\n');

}

mainApp();