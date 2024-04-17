/**
 * Envoltorio que habilita el servicio para crear tareas.
 * 
 * @function
 * @name CreateTaskServiceWrapper
 * @param {HelpersScheme} helpers - Funciones de ayuda.
 * @param {UseCasesScheme} useCases - Casos de uso.
 * @returns 
 */
const CreateTaskServiceWrapper = ( helpers, useCases ) => {

    const { createTask } = useCases.TaskUseCases;
    const { generateUUID } = helpers;

    /**
     * Servicio que registra una tarea.
     * 
     * @typedef {object} BodyScheme
     * @property {string} title - Título de la tarea.
     * @property {string} description - Descripción de la tarea.
     * 
     * @function
     * @name CreateTaskService
     * @param {BodyScheme} body - Tarea a registrar.
     * @returns `true` si la tarea ha sido creada con éxito.
     */
    const CreateTaskService = async ( body ) => {

        const task = {
            uuid_task: generateUUID(),
            title: body.title,
            task_description: body.description,
            id_user: 1
        };
        
        await createTask(task);

        return true;

    };

    return CreateTaskService;

}

module.exports = { CreateTaskServiceWrapper };