const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/mypokemon', require('./routes/api/mypokemon'));// unless hit backend routes, we will hit the index.html

mongoose.connect(process.env.MONGODB_URI || require('./config/keys').mongoURI, { useNewUrlParser: true });
// pushto heroku, then have the it build there.
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));// load index html in client build
  app.get('*', (req, res) => {
  // any requests that arent app.use('/api/mypokemon', require('./routes/api/mypokemon'));, loads index.html
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))// load index html in client/build/index
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}!`));// eslint-disable-line no-console
