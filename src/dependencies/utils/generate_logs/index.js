//* Importaciones
const fs = require('fs');
const { format } = require('date-fns');

/**
 * Genera un archivo de logs de errores, por día.
 * 
 * @typedef {object} ConfigScheme - Esquema de configuración de logs.
 * @property {string} context - Tipo de origen de los logs.
 * @property {string} content - Contenido a almacenar.
 * 
 * @function
 * @name generateLogs
 * @param {ConfigScheme} config - Parámetros de configuración del log.
 */
const generateLogs = ( config ) => {

    const currentDate = new Date();
    const dateLog = format(currentDate, 'dd/MM/yyyy HH:mm:ss a');
    const todayLog = format(currentDate, 'ddMMyyyy');

    const BASE_PATH_LOGS = './shared/logs';
    
    const repositoryPaths = {
        error:{ 
            path: `${BASE_PATH_LOGS}/errors/error_${todayLog}.txt`,
            content: `${dateLog} -> [${config.context}] {\n name: ${ config.content.name } \n message: ${ config.content.message } \n stack: ${ config.content.stack } \n  } \n \n`,
        },
        query: {
            path: `${BASE_PATH_LOGS}/queries/sql_${todayLog}.txt`,
            content: `${currentDate} -> [${config.context}]  ${ config.content } \n \n`,
        }
    };

    let setContent = repositoryPaths[config.context].content;

    if ( fs.existsSync( repositoryPaths[config.context].path ) ) {
        let content = fs.readFileSync(repositoryPaths[config.context].path, 'utf-8');
        content = setContent + content;
        fs.writeFileSync(repositoryPaths[config.context].path, content);
    } else {
        fs.writeFileSync(repositoryPaths[config.context].path, setContent);
    }

}

module.exports = { generateLogs };
