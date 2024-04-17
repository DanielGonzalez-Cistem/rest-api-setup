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

const getOneTask = async () => {};

/**
 * Caso de uso que registra una nueva tarea en base de datos.
 * 
 * @typedef {object} BodyScheme
 * @property {string} title - Título de la tarea.
 * @property {string} description - Descripción de la tarea.
 * 
 * @function
 * @name createTask
 * @param {BodyScheme} body - Tarea a registrar.
 * @returns Tarea.
 */
const createTask = async ( body ) => await Tasks.create(body);

const updateTask = async ( id ) => {};

const deleteTask = async ( id ) => {};

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
}