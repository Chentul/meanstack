'use strict'

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

// objeto de tipo Schema
var UserSchema = Schema({
  name:       String,
  surmae:     String,
  email:      String,
  password:   String,
  role:       String,
  image:      String
});

module.exports = mongoose.model( 'User', UserSchema );
