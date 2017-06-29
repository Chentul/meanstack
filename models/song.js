'use strict'

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

// objeto de tipo Schema
var SongSchema = Schema({
  number:          String,
  name:            String,
  duration:        String,
  file:            String,
  // guarda una referencia a otro objeto
  // guarda el id de otro objeto el cual es un Artist
  album:           { type: Schema.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model( 'Song', SongSchema );
