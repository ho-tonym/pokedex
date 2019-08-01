const mongoose = require('mongoose');
const { Schema } = mongoose;

const PokemonSchema = new Schema({
  myPokemon: {
    type: Array,
    required: true,
  },
  key: {
    type: String,
    required: true
  }
});

const Pokemon = mongoose.model('pokemon', PokemonSchema);
module.exports = Pokemon;
