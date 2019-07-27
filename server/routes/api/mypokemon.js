const express = require('express');
const router = express.Router();

const Pokemon = require('../../models/Pokemon');

// GET api/mypokemon - Get All Pokemon
router.get('/', (req, res) => {
  Pokemon.find()// mongoose method .find
    .then(mypokemon => res.json(mypokemon))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

router.get('/:key', (req, res) => {
  Pokemon.findOne({key: req.params.key})
    .then(mypokemon => res.send(mypokemon))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

// POST api/mypokemon - Create An Pokemon
router.post('/', (req, res) => {
  const newPokemon = new Pokemon({
    myPokemon: req.body.myPokemon,
    key: req.body.key
  });

  newPokemon.save().then(pokemon => res.json(pokemon))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

// DELETE api/mypokemon/:id - Delete A Pokemon
router.delete('/delete/:id', (req, res) => {
  // Pokemon.findById(req.params.id)
  //   .then(pokemon => pokemon.remove().then(() => res.json({ success: true })))
  //   .catch(() => res.status(404).json({ success: false }));

  Pokemon.deleteMany({})
    .then(pokemon => pokemon.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});


module.exports = router;
