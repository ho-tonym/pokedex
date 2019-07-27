const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))// eslint-disable-line no-console
  .catch(err => console.log(err));// eslint-disable-line no-console

// Use Routes
app.use('/api/mypokemon', require('./routes/api/mypokemon'));

app.get('/', (req, res) => {
  res.send('You have reached the backend server. Wooh!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}!`));// eslint-disable-line no-console
