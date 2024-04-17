/**
 * Envoltorio que habilita el servicio para crear tareas.
 * 
 * @function
 * @name UpdateTaskServiceWrapper
 * @param {UseCasesScheme} useCases - Casos de uso.
 * @returns 
 */
const UpdateTaskServiceWrapper = ( Exception, useCases ) => {

    const { getOneTask, updateTask } = useCases.TaskUseCases;
    const { getOneTaskStatus } = useCases.TaskStatusUseCases;

    /**
     * Servicio que edita una tarea.
     * 
     * @typedef {object} BodyScheme
     * @property {string} title - Título de la tarea.
     * @property {string} task_description - Descripción de la tarea.
     * @property {number} id_task_status - Estado de la tarea.
     * 
     * @function
     * @name UpdateTaskService
     * @param {string|number} id - Tarea a registrar.
     * @param {BodyScheme} body - Tarea a registrar.
     * @returns `true` si la tarea ha sido creada con éxito.
     */
    const UpdateTaskService = async ( id, body ) => {
        
        //* Verificar que la tarea exista
        const task = await getOneTask(id)
        if ( task === null ) throw new Exception('TASK_NOT_FOUND');

        //* Verificar que el estado sea válido
        if ( body.status !== undefined ) {
            const taskStatus = await getOneTaskStatus(body.status);
            if ( taskStatus === null ) throw new Exception('STATUS_CONFLICT')
        }
        
        //* Editar tarea
        await updateTask(id, body);

        return true;

    };

    return UpdateTaskService;

}

module.exports = { UpdateTaskServiceWrapper };