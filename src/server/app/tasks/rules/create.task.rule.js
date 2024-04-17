//* Importaciones
const { check } = require('express-validator');

/**
 * Envoltorio que habilita las reglas de validación de la creación de una tarea.
 * 
 * @function
 * @name CreateTaskRuleWrapper
 * @param {MiddlewaresScheme} middlewares 
 * @returns 
 */
const CreateTaskRuleWrapper = ( middlewares ) => {

    const { express_validator } = middlewares;

    return [
        check('title')
            .notEmpty().withMessage("El título es requerido")
            .isString().withMessage("El título no es valido")
            .isLength({ min: 1, max: 70 }).withMessage("El título esta fuera de rango")
            .trim(),
        check('description')
            .notEmpty().withMessage("La descripción es requerida")
            .isString().withMessage("La descripción no es valida")
            .isLength({ min: 1, max: 255 }).withMessage("La descripción esta fuera de rango")
            .trim(),

        express_validator.validateResult
    ]

}

module.exports = { CreateTaskRuleWrapper };