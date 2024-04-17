/**
 * Envoltorio que habilita el servicio para obtener una tarea.
 * 
 * @function
 * @name TaskServiceWrapper
 * @param {DependenciesScheme} dependencies 
 * @returns TaskService
 */
const TaskServiceWrapper = ( useCases ) => {

    const { getOneTask } = useCases.TaskUseCases;

    /**
     * Servicio que obtiene una tarea.
     * 
     * @function
     * @name TaskService
     * @returns Lista de tareas.
     */
    const TaskService = async ( id ) => await getOneTask(id);

    return TaskService;

}

module.exports = { TaskServiceWrapper };