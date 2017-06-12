// end point: el primer archivo que el proyecto va a cargar
'use strict'

// carga las dependencias
var mongoose = require( 'mongoose' );

// realiza la conexion a mongodb
mongoose.connect( 'mongodb://localhost:27017/curso_mean2', ( err, res ) => {

  if( err ) {
    throw err;
  }
  else {
    console.log( "The connection to the data base is working ..." );
  }
} );
