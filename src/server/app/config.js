//* Importaciones
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { utils } = require('../../dependencies');

class AppServer {

    constructor () {

        this.app = express();

        /**
         * @type {EnvScheme} - Variables de entorno.
         */
        this.env = process.env;

        this.paths = {
            welcome: '/api/app/welcome'
        }

        //? Precargar elementos
        this.middlewares();

    }

    deploy () {
        utils.deployServer({
            environment: 'APP',
            port: this.env.APP_PORT,
            server: this.app
        });
    }

    dbConnection () {
        console.log('Conectando a base de datos...');
    }

    middlewares () {
        if ( this.env.NODE_ENV === 'development' ) {
            this.app.use( morgan('dev') );
        }

        this.app.use( cors() );
        this.app.use( helmet() );
        this.app.use( express.json() );
    }

    routes () {
        console.log('Cargando rutas del servidor APP...');
    }

}

module.exports = { AppServer };