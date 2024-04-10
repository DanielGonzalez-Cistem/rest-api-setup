//* Configuración de variables de entorno
require('dotenv').config();

const mainApp = () => {

    /**
     * @type {EnvScheme} Variables de entorno.
     */
    const env = process.env;

    console.log('✅ Publicando servidor HTTP');
    console.log(`✨ rest-api-setup v${ env.VERSION } ha sido inicializado...\n`);

}

mainApp();