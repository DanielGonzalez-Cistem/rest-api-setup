class Exception extends Error {

    constructor(name, additionalValue = undefined) {
        super();

        this.name = name;
        this.additionalValue = additionalValue;
    }

}

module.exports = { Exception };