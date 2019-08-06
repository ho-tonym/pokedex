const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();

const mongoURI = process.env.MONGODB_URI || require('./config/keys').mongoURI
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/mypokemon', require('./routes/api/mypokemon'));

mongoose.connect(mongoURI, { useNewUrlParser: true })

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static('client/build'))
  app.use(express.static(path.join(__dirname, "client", "build")))
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  // })
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}!`));// eslint-disable-line no-console
