'use strict'

var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var app = express();

// cargar rutas

// configuracion de bodyParser
app.use( bodyParser.urlencoded( { extend: false } ) );
// convierte los objetos en json
app.use( bodyParser.json() );

// configurar cabecera http

// rutas base
app.get( '/pruebas', function( request, response ) {
  response.status( 200 ).send( { message: 'Bienvenido al curso de MEANSTACK2' } );
} );

// exportamos el modulo
module.exports = app;
