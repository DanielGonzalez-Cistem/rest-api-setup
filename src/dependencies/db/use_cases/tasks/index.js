//* Importaciones
const { Tasks, TaskStatus, Users } = require('../../models');

/**
 * Función que obtiene todas las tareas de base de datos.
 * 
 * @function
 * @name getAllTasks
 * @returns Lista de tareas.
 */
const getAllTasks = async () => {

    const excludeFields = {  
        exclude: ['created_at', 'updated_at']
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

const createTasks = async () => {};

const updateTask = async ( id ) => {};

const deleteTask = async ( id ) => {};

module.exports = {
    getAllTasks,
    getOneTask,
    createTasks,
    updateTask,
    deleteTask
}