//* Importaciones
const { v4: UUIDv4 } = require('uuid');

/**
 * Función que generá un nuevo UUID versión 4.
 * 
 * @function
 * @name generateUUID
 * @returns UUID.
 */
const generateUUID = () => UUIDv4();

module.exports = { generateUUID };