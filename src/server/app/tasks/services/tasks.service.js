/**
 * Envoltorio que habilita el servicio para obtener tareas.
 * 
 * @function
 * @name TasksServiceWrapper
 * @param {DependenciesScheme} dependencies 
 * @returns TasksService
 */
const TasksServiceWrapper = ( useCases ) => {

    const { getAllTasks } = useCases.TaskUseCases;

    /**
     * Servicio que obtiene una lista de tareas.
     * 
     * @function
     * @name TasksService
     * @returns Lista de tareas.
     */
    const TasksService = async () => await getAllTasks();

    return TasksService;

}

module.exports = { TasksServiceWrapper };