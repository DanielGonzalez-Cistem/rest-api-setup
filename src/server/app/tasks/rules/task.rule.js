//* Importaciones
const { check } = require('express-validator');

/**
 * Envoltorio que habilita las reglas de validación de la creación de una tarea.
 * 
 * @function
 * @name TaskRuleWrapper
 * @param {MiddlewaresScheme} middlewares 
 * @returns 
 */
const TaskRuleWrapper = ( middlewares ) => {

    const { express_validator } = middlewares;

    return [
        check('id')
            .notEmpty().withMessage("El id es requerido")
            .isNumeric().withMessage("El id no es valido"),

        express_validator.validateResult
    ]

}

module.exports = { TaskRuleWrapper };