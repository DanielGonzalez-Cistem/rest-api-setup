//* Importaciones
const { AppServer } = require('./src/server/app/config');
const { AuthServer } = require('./src/server/auth/config');

//* Variables de entorno globalizados
require('dotenv/config');

const mainApp = () => {

    /**
     * @type {EnvScheme} - Esquema de variables de entorno.
     */
    const env = process.env;

    const appServer = new AppServer();
    const authServer = new AuthServer();

    appServer.deploy();
    authServer.deploy();

    console.log(`✨ rest-api-setup v${ env.VERSION } ha sido inicializado...`);
    console.log(env.NODE_ENV === 'development' ? '✅ Publicando servidor HTTP...\n' : '✅ Publicando servidor HTTPS...\n');
}

mainApp();