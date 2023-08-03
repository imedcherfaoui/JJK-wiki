const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    default: null
  },
  birthday: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    default: null
  },
  weight: {
    type: Number,
    default: null
  },
  description: {
    type: String,
    required: true
  }
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = mongoose.model('Character', CharacterSchema);