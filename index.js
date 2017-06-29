// end point: el primer archivo que el proyecto va a cargar
'use strict'

// carga las dependencias
var mongoose = require( 'mongoose' );
var app = require( './app' );
var port = process.env.PORT || 3977;

//Para eliminar el aviso de mongoose que devuelve por la consola donde hemos lanzado el npm start
mongoose.Promise = global.Promise;
// realiza la conexion a mongodb
mongoose.connect( 'mongodb://localhost:27017/curso_mean2', ( err, res ) => {

  if( err ) {
    throw err;
  }
  else {

    console.log( "The connection to the data base is working ..." );
    app.listen( port, function() {
      console.log( "Servidor del API REST de musica escuchando http://localhost:" + port );
    } ); // fin del app.listen()

  } // fin del else

} ); // fin del mongoose.connect()
