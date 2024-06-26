//* Importaciones globales
const moment = require('moment-timezone');
const { Sequelize } = require('sequelize');
const { generateLogs } = require('../../utils');

/**
 * @type {EnvScheme} Variables de entorno.
 */
const envs = process.env;

/**
 * Anula el formato de zona horaria para fechas en MSSQL asignados en 'DataType.DATE'.
 * 
 * Esto soluciona un error en la formación de fechas y horas de Sequelize
 * para una base de datos MSSQL. Se debe a que Sequelize, añade el valor 
 * extra "+00:00", que no es compatible por MSSQL.
 * 
 * Más información, consulte esta liga de StackOverflow:
 * @see https://stackoverflow.com/questions/58034185/inserting-or-updating-a-date-field-give-the-following-error-conversion-failed-wh
 * 
 * ❌ ***ADVERTENCIA***: 
 * No se recomienda sobreescribir o modificar los 'prototypes' de JavaScript bajo
 * ningún concepto. Este caso es particular, debido a que es la mejor solución a 
 * este contexto. De otro modo, evite sobreescribir los 'prototypes'.
 * 
 * @param {*} date - Define una fecha.
 * @param {*} options - Define opciones alternativas.
 * @returns Fecha Formateada.
 */
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

//? Instancia de conexión a base de datos.
const sequelize = new Sequelize(envs.DB_NAME, envs.DB_USER, envs.DB_PWD, {
    host: envs.DB_HOST, 
    dialect: 'mssql',
    dialectModulePath: 'tedious',
    port: envs.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: ( log ) => {
        if ( Boolean( envs.DB_LOGS ) ) {
            generateLogs({context: 'query', content: log});

            console.log(`✨ [CONSULTA SEQUELIZE] - ${ log }`);
            console.log('');
            return;
        }
    },
    timezone: moment.tz.guess(),
    dialectOptions: {
        //? Configura el tipo de tiempo a utilizar (UTC o Zona Horaria Local)
        useUTC: false,
        options: {
            //? Configura el cifrado de la conexión
            encrypt: Boolean( envs.DB_ENCRYPT )
        }
    }
});

module.exports = { sequelize };