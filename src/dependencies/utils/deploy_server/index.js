//* Importaciones
const https = require('https');
const fs = require('fs');

const { networks } = require('./utils/networks');

/**
 * Configura el despliegue de los servidores.
 * 
 * @typedef {'APP' | 'AUTH'} EnvironmentScheme
 * 
 * @typedef {object} ConfigScheme
 * @property {EnvironmentScheme} environment - Tipo de servidor a publicar.
 * @property {string} port - Puerto de publicación de servidor.
 * @property {Function} server - Servidor a cargar. 
 * 
 * @function
 * @name deployServer
 * @param {ConfigScheme} config - Configuración de servidor.
 */
const deployServer = ( config ) => {

    /**
     * @type {EnvScheme} Variables de entorno.
     */
    const env = process.env;

    const { environment, port, server } = config;
    
    if ( env.NODE_ENV === 'production' ) {
        
        const configSSL = {
            key: fs.readFileSync( env.SSL_KEY ).toString('utf-8'),
            cert: fs.readFileSync( env.SSL_CERT ).toString('utf-8')
        }
        const serverHTTPS = https.createServer(configSSL, server);

        return serverHTTPS.listen(port, () => {
            console.log(`⚡[${environment}]: running at https://${env.HOST}:${port}`);
        });
        
    } else {

        server.listen(port, () => {
            
            const getNetworks = networks();

            getNetworks.forEach(client => {
                console.log(`⚡[${environment}]: running at http://${client}:${port}`);
            });
        });

    }

    
}

module.exports = { deployServer };