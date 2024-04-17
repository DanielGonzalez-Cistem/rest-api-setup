//* Importaciones
const { check } = require('express-validator');

/**
 * Envoltorio que habilita las reglas de validación de la creación de una tarea.
 * 
 * @function
 * @name UpdateTaskRuleWrapper
 * @param {MiddlewaresScheme} middlewares 
 * @returns 
 */
const UpdateTaskRuleWrapper = ( middlewares ) => {

    const { express_validator } = middlewares;

    return [
        check('title')
            .optional()
            .notEmpty().withMessage("El título es requerido")
            .isString().withMessage("El título no es valido")
            .isLength({ min: 1, max: 70 }).withMessage("El título esta fuera de rango")
            .trim(),

        check('task_description')
            .optional()
            .notEmpty().withMessage("La descripción es requerida")
            .isString().withMessage("La descripción no es valida")
            .isLength({ min: 1, max: 255 }).withMessage("La descripción esta fuera de rango")
            .trim(),

        check('id_task_status')
            .optional()
            .notEmpty().withMessage("El estado es requerido")
            .isNumeric().withMessage("El estado no es valido"),

        express_validator.validateResult
    ]

}

module.exports = { UpdateTaskRuleWrapper };