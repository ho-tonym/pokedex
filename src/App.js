import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './containers/navbar'
import HomePage from './containers/HomePage'
import MyPokemon from './containers/MyPokemon'
import About from './components/about/_about'

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/mypokemon" component={MyPokemon} />
    </div>
  </Router>
)

export default App
