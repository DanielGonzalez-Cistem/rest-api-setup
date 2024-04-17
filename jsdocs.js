//* ✅ Notaciones JS DOCS globalizadas

//? Comentación de variables de entorno
/**
 * @typedef {'development' | 'production'} NodeEnv
 */

/**
 * @typedef {object} EnvScheme - Esquema de variables de entorno.
 * @property {NodeEnv} NODE_ENV - Tipo Entorno.
 * @property {string} VERSION - Versión de producto.
 * @property {string} APP_PORT - Puerto de aplicación APP.
 * @property {string} AUTH_PORT - Puerto de aplicación AUTH.
 * @property {string} HOST - Host de aplicación en modo HTTPS.
 * @property {string} SSL_KEY - Certificado SSL `.key`.
 * @property {string} SSL_CERT - Certificado SSL `.cert` o `.crt`.
 * @property {string} DB_HOST - Host de la base de datos.
 * @property {string} DB_USER - Usuario de conexión de base de datos.
 * @property {string} DB_PWD - Contraseña de conexión de base de datos.
 * @property {string} DB_NAME - Nombre de base de datos.
 * @property {string} DB_PORT - Purto de conexión de base de datos.
 * @property {string} DB_ENCRYPT - Habilita el cifrado de la conexión a base de datos.
 * @property {string} DB_LOGS - Habilita los logs de consultas a base de datos.
 */

//? Comentación de Dependencias

//? Definición de utilidades
/**
 * @typedef {object} StatusCodeScheme - Esquema de Códigos de Estado HTTP
 * @property {number} BAD_REQUEST - La petición no cumple con algún criterio especifícado.
 * @property {number} CREATED - El recurso se ha creado con éxito.
 * @property {number} FORBIDDEN - El cliente no cuenta con permisos suficientes para acceder al recurso.
 * @property {number} INTERNAL_SERVER_ERROR - Ha ocurrido un error en el servidor.
 * @property {number} NOT_FOUND - El recurso no ha sido encontrado.
 * @property {number} OK - El recurso se ha realizado con éxito.
 * @property {number} UNAUTHORIZED - El cliente no cuenta con la atenticación requerida.
 */

/**
 * @typedef {object} UtilsScheme - Esquema de Utils
 * @property {Function} deployServer - Función que habilita la publicación de servidores API.
 * @property {Function} generateLogs - Función que genera un log de errores y queries SQL.
 * @property {StatusCodeScheme} statusCode - Lista de códigos de estado HTTP.
 */

//? Definición de manejador de errores
/**
 * @typedef {object} HttpErrorScheme - Esquema de HttpError
 * @property {Function} Exception - Clase personalizada para capturar errores.
 * @property {Function} HttpErrorHandler - Función para captura y parseo de errores.
 * @property {Function} ServiceNotFound - Función para capturar peticiones que no existan.
 */

//? Definición de recursos a base de datos
/**
 * @typedef {object} ConectionScheme - Esquema de Connection
 * @property {object} sequelize - Instancia de base de datos.
 */

/**
 * @typedef {object} ModelsScheme - Esquema de Models
 * @property {object} task_status - Modelo de la entidad Estados de Tarea.
 * @property {object} tasks - Modelo de la entidad Tareas.
 * @property {object} user_status - Modelo de la entidad Estados de Usuario.
 * @property {object} users - Modelo de la entidad Usuarios.
 */

/**
 * @typedef {object} TaskUseCasesScheme - Esquema de Task Use Cases
 * @property {Function} getAllTasks - Función para obtener todas las tareas.
 * @property {Function} getOneTask - Función para obtener una tarea.
 * @property {Function} createTask - Función para crear una tarea.
 * @property {Function} updateTask - Función oara editar una tarea.
 * @property {Function} deleteTask - Función para eliminar una tarea.
 */

/**
 * @typedef {object} TaskStatusUseCasesScheme - Esquema de Task Use Cases
 * @property {Function} getOneTaskStatus - Función para obtener una tarea.
 */

/**
 * @typedef {object} UseCasesScheme - Esquema de Use Cases
 * @property {TaskUseCasesScheme} TaskUseCases - Casos de Uso de Tareas.
 * @property {TaskStatusUseCasesScheme} TaskStatusUseCases - Casos de Uso de Estados de Tareas.
 */

/**
 * @typedef {object} VerifyConnectionScheme - Esquema de Connection
 * @property {Function} verifyConnection - Función para probar la conexión a base de datos.
 */

/**
 * @typedef {object} DbScheme - Esquema de Db
 * @property {ConectionScheme} connection - Instancia de conexión a base de datos.
 * @property {ModelsScheme} models - Modelos de base de datos.
 * @property {UseCasesScheme} use_cases - Casos de uso.
 * @property {VerifyConnectionScheme} verify_connection - Verificación de conexión a base de datos.
 */

//? Definición de recursos de ayuda
/**
 * @typedef {object} HelpersScheme - Esquema de helpers
 * @property {Function} generateUUID - GFunción que genera un nuevo código UUID..
 */

//? Definición de middlewares
/**
 * @typedef {object} ExpressValidatorScheme - Esquema de middlewares
 * @property {Function} validateResult - Función que controla los errores de integridad de información.
 */

/**
 * @typedef {object} MiddlewaresScheme - Esquema de middlewares
 * @property {ExpressValidatorScheme} express_validator - Middlewares de express validator.
 */

/**
 * @typedef {object} DependenciesScheme - Esquema de dependencias.
 * @property {DbScheme} db - Centralización de elementos de base de datos.
 * @property {HelpersScheme} helpers - Centralización de códigos de ayuda.
 * @property {HttpErrorScheme} httpError - Centralización de control de errores.
 * @property {MiddlewaresScheme} middlewares - Centralización de middlewares.
 * @property {UtilsScheme} utils - Centralización de utilidades.
 */