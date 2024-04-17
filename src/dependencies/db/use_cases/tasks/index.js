//* Importaciones
const { Tasks, TaskStatus, Users } = require('../../models');

/**
 * Caso de uso que obtiene todas las tareas de base de datos.
 * 
 * @function
 * @name getAllTasks
 * @returns Lista de tareas.
 */
const getAllTasks = async () => {

    const excludeFields = {  
        exclude: ['id_user', 'id_task_status', 'created_at', 'updated_at']
    }

    return await Tasks.findAll({
        attributes: excludeFields,
        include: [
            {
                model: Users,
                attributes: ['id_user', 'username'],
                required: true,
            }, 
            {
                model: TaskStatus,
                attributes: ['id_task_status', 'task_status_name'],
                required: true,
            }
        ]
    });

};

/**
 * Caso de uso que obtiene una sola tarea de base de datos.
 * 
 * @function
 * @name getOneTask
 * @param {string|number} id - Identificador de la tarea.
 * @returns Tarea.
 */
const getOneTask = async ( id ) => {
    const excludeFields = {  
        exclude: ['id_user', 'id_task_status', 'created_at', 'updated_at']
    }

    return await Tasks.findOne({
        attributes: excludeFields,
        where: { id_task: id },
        include: [
            {
                model: Users,
                attributes: ['id_user', 'username'],
                required: true,
            }, 
            {
                model: TaskStatus,
                attributes: ['id_task_status', 'task_status_name'],
                required: true,
            }
        ]
    });
};

/**
 * Caso de uso que registra una nueva tarea en base de datos.
 * 
 * @typedef {object} BodyScheme
 * @property {string} title - Título de la tarea.
 * @property {string} task_description - Descripción de la tarea.
 * 
 * @function
 * @name createTask
 * @param {BodyScheme} body - Tarea a registrar.
 * @returns Tarea.
 */
const createTask = async ( body ) => await Tasks.create(body);

/**
 * Caso de uso que actualiza una tarea en base de datos.
 * 
 * @typedef {object} BodyScheme
 * @property {string} title - Título de la tarea.
 * @property {string} task_description - Descripción de la tarea.
 * @property {number} id_task_status - Estado de la tarea.
 * 
 * @function
 * @name updateTask
 * @param {string|number} id - Identificador de tarea.
 * @param {BodyScheme} body - Cuerpo de la tarea.
 * @returns Tarea.
 */
const updateTask = async ( id, body ) => {

    return await Tasks.update(body, {
        where: { id_task: id }
    });

};

/**
 * Caso de uso para eliminar una tarea de base de datos.
 * 
 * @function
 * @name deleteTask
 * @param {string|number} id - Identificador de la tarea.
 */
const deleteTask = async ( id ) => await Tasks.destroy({ where: { id_task: id } });

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
}