//* Importaciones
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const dependencies = require('../../dependencies');

class AuthServer {

    constructor () {

        this.auth = express();

        /**
         * @type {EnvScheme} - Variables de entorno.
         */
        this.env = process.env;

        //? Precargar elementos
        this.middlewares();
        this.routes();

    }

    deploy () {
        const { utils } = dependencies;

        utils.deployServer({
            environment: 'AUTH',
            port: this.env.AUTH_PORT,
            server: this.auth
        });
    }

    dbConnection () {
        console.log('Conectando a base de datos...');
    }

    middlewares () {
        if ( this.env.NODE_ENV === 'development' ) {
            this.auth.use( morgan('dev') );
        }

        this.auth.use( cors() );
        this.auth.use( helmet() );
        this.auth.use( express.json() );
    }

    routes () {
        //? Desestructuración de dependencias
        const { httpError } = dependencies;
        const { HttpErrorHandler, ServiceNotFound } = httpError;

        //? Definición de enrutadores
        const PATH_API = '/api/v1/auth';
        this.auth.use(`${PATH_API}`, require('./welcome/router').WelcomeRouterWrapper(dependencies));

        //? Control de errores
        this.auth.use( ServiceNotFound );
        this.auth.use( HttpErrorHandler );
    }

}

module.exports = { AuthServer };