'use strict'

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

// objeto de tipo Schema
var AlbumSchema = Schema({
  title:          String,
  description:    String,
  year:           String,
  image:          String,
  // guarda una referencia a otro objeto
  // guarda el id de otro objeto el cual es un Artist
  artist:         { type: Schema.ObjectId, ref: 'Artist' }
});

module.exports = mongoose.model( 'Album', AlbumSchema );
