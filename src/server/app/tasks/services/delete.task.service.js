/**
 * Envoltorio que habilita el servicio para obtener una tarea.
 * 
 * @function
 * @name DeleteTaskServiceWrapper
 * @param {DependenciesScheme} dependencies 
 * @returns TaskService
 */
const DeleteTaskServiceWrapper = ( Exception, useCases ) => {

    const { getOneTask, deleteTask } = useCases.TaskUseCases;

    /**
     * Servicio que elimina una tarea.
     * 
     * @function
     * @name DeleteTaskService
     * @returns Lista de tareas.
     */
    const DeleteTaskService = async ( id ) => {

        //* Verificar que la tarea exista
        const task = await getOneTask(id)
        if ( task === null ) throw new Exception('TASK_NOT_FOUND');

        //* Editar tarea
        await deleteTask(id);

        return true;

    };

    return DeleteTaskService;

}

module.exports = { DeleteTaskServiceWrapper };