const mongoose = require('mongoose');
const { Schema } = mongoose;

const PokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cp: {
    type: Number,
    required: true,
  },
});

const Pokemon = mongoose.model('pokemon', PokemonSchema);
module.exports = Pokemon;
