import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import NavBar from '../containers/navbar';
import About from './about/_about';
import HomePage from '../containers/HomePage';
import Pokemon from '../containers/Pokemon';

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Pokemon />
    </div>
  </Router>
);

export default App;
