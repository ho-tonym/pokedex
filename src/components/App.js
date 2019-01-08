import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';

// import NavBar from '../containers/navbar'
import NavBar2 from '../containers/navbar2'
import About from './about/_about'
import HomePage from '../containers/HomePage';
import MyPokemonList from '../containers/MyPokemonList'
import Pokemon from '../containers/Pokemon'
import Pokemon2 from '../containers/Pokemon2'

const App = () =>
<Router>
  <div className="App">
      <NavBar2/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
      <Pokemon2/>
  </div>
</Router>

export default App;


// <Route path='/mypokemon' component={MyPokemonList}/>
// <Route path='/pokemon/:id' component={Pokemon}/>


// <Link to="/user/:username"></Link>
// <Route path='/user/:username' component={User}/>
//
//
//
// <Link to="/user/john"></Link>
// <Route path='/user/:username' component={User}/>
// const User ({match}) => {
//   <h1>User ID: {match.params.username}</h1>
// }
