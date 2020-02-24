import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SideNav from '../SideNav'
import NavBar from '../NavBar'
import HomePage from '../HomePage'
import MyPokemon from '../MyPokemon'
import Faq from '../Faq'
import './App.min.css';
import '../../assets/style/components/loader.min.css';
import '../../assets/style/components/typeButton.min.css';

const App = () => (
  <Router>
    <div className="App">
      <NavBar />
      <SideNav />
      <Route exact path="/" component={HomePage} />
      <Route path="/faq" component={Faq} />
      <Route path="/mypokemon" component={MyPokemon} />
    </div>
  </Router>
)

export default App
