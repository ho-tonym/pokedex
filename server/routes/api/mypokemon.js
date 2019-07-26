const express = require('express');
const router = express.Router();

const Pokemon = require('../../models/Pokemon');

// GET api/mypokemon - Get All Pokemon
router.get('/', (req, res) => {
  Pokemon.find()// mongoose method .find
    .sort({ name: -1 }) // descending sort
    .then(mypokemon => res.json(mypokemon))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

// POST api/mypokemon - Create An Pokemon
router.post('/', (req, res) => {
  const newPokemon = new Pokemon({
    name: req.body.name,
    cp: req.body.cp,
  });

  newPokemon.save().then(pokemon => res.json(pokemon))
    .catch(err => res.status(404).json({ success: false, error: err }));
});


module.exports = router;
