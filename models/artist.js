'use strict'

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

// objeto de tipo Schema
var ArtistSchema = Schema({
  name:         String,
  description:  String,
  image:        String
});

module.exports = mongoose.model( 'Artist', ArtistSchema );
