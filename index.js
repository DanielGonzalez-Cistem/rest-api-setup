//* Importaciones
const { AppServer } = require('./src/server/app/config');

//* Variables de entorno globalizados
require('dotenv/config');

const mainApp = () => {

    const appServer = new AppServer();
    appServer.deploy();

}

mainApp();