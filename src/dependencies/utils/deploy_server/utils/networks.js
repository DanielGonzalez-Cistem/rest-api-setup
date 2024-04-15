//* Importaciones
const os = require('os');

/**
 * Detecta las interfaces de red disponibles.
 * 
 * @function
 * @name networks
 * @returns {string[]} Lista de Interfaces de Red.
 */
const networks = () => {

    const networkInterfaces = os.networkInterfaces();

    let listNetworks = [];

    Object.keys(networkInterfaces).forEach( interfaces => {

        networkInterfaces[interfaces]
            .filter( props => props.family === 'IPv4' && props.address !== '127.0.0.1')
            .forEach( ips => listNetworks.push(ips.address));

    });

    return listNetworks;

}

module.exports = { networks };