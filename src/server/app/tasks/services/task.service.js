/**
 * Envoltorio que habilita el servicio para obtener una tarea.
 * 
 * @function
 * @name TaskServiceWrapper
 * @param {DependenciesScheme} dependencies 
 * @returns TaskService
 */
const TaskServiceWrapper = ( Exception,useCases ) => {

    const { getOneTask } = useCases.TaskUseCases;

    /**
     * Servicio que obtiene una tarea.
     * 
     * @function
     * @name TaskService
     * @returns Lista de tareas.
     */
    const TaskService = async ( id ) => {

        //* Verificar que la tarea exista
        const task = await getOneTask(id)
        if ( task === null ) throw new Exception('TASK_NOT_FOUND');

        return task;

    }

    return TaskService;

}

module.exports = { TaskServiceWrapper };