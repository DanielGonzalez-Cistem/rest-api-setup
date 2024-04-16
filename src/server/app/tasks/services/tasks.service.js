/**
 * 
 * @param {*} dependencies 
 * @returns 
 */
const TasksServiceWrapper = ( useCases ) => {

    const { getAllTasks } = useCases.TaskUseCases;

    //? Centralización de casos de uso
    // const cases = {
    //     tasks: getAllTasks(),
    // }

    const TasksService = async () => await getAllTasks();

    return TasksService;

}

module.exports = { TasksServiceWrapper };