//* Importaciones
const { TaskStatus } = require('../../models');

const getOneTaskStatus = async ( id ) => {

    return await TaskStatus.findOne({ 
        where: { id_task_status: id }
    });

}

module.exports = {
    getOneTaskStatus
}