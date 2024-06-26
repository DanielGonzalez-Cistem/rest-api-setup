//* Importaciones
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const dependencies = require('../../dependencies');

class AppServer {

    constructor () {

        this.app = express();

        /**
         * @type {EnvScheme} - Variables de entorno.
         */
        this.env = process.env;

        //? Precarga de configuraciones
        this.middlewares();
        this.routes();

    }

    deploy () {

        //? Desestructuración de dependencias
        const { utils } = dependencies;

        utils.deployServer({
            environment: 'APP',
            port: this.env.APP_PORT,
            server: this.app
        });
        
    }

    middlewares () {

        //? Desestructuración de dependencias
        const { verifyConnection } = dependencies.db;

        if ( this.env.NODE_ENV === 'development' ) {
            this.app.use( morgan('dev') );
        }

        this.app.use( cors() );
        this.app.use( helmet() );
        this.app.use( express.json() );
        this.app.use( verifyConnection );

    }

    routes () {

        //? Desestructuración de dependencias
        const { httpError } = dependencies;
        const { HttpErrorHandler, ServiceNotFound } = httpError;

        //? Definición de enrutadores
        const PATH_API = '/api/v1/app';
        this.app.use(`${PATH_API}`, require('./welcome/router').WelcomeRouterWrapper(dependencies));

        //? Control de errores
        this.app.use( ServiceNotFound );
        this.app.use( HttpErrorHandler );

    }

}

module.exports = { AppServer };