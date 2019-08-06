const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/mypokemon', require('./routes/api/mypokemon'));

const db = require('./config/keys').mongoURI;

mongoose.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true });

app.get('/', (req, res) => {
  res.send('You have reached the backend server. Wooh!');
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use('/ho-tonym/pokedex', express.static('client/build'));// load index html in client build
  app.get('*', (req, res) => {
  // any requests that arent app.use('/api/mypokemon', require('./routes/api/mypokemon'));, loads index.html
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.hmtl'))// load index html in client/build/index
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}!`));// eslint-disable-line no-console
