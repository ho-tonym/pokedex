import {filterPokemon} from '../redux/actions/pokemonActions'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Search from '../components/home/search'
import {connect} from 'react-redux'

class NavBar extends Component {

  handleClearText = (event) => {

    event.target.parentNode.firstElementChild.style.opacity = "1"
    event.target.parentNode.style.borderColor = "#fff"
    event.target.placeholder= ""

  }
  handlePlaceholder = (event) => {
    event.target.parentNode.firstElementChild.style.opacity = "0.5"
    event.target.parentNode.style.borderColor = "#6e6865"
    event.target.placeholder= "enter pokemon"
  }
  handleSearch = (event) => {
    this.props.filterPokemon(event.currentTarget.value);
  }
  render(){
    return(
      <div className="navbar">
        <ul>
          <li className="eachnav"><Link to="/">Home</Link></li>
          <li className="eachnav"><Link to="/about">About</Link></li>
          <li className="eachnav"><Link to="/mypokemon">My Pokemon</Link></li>
          <li className="eachnav"><Search onChange={this.handleSearch} handleClearText={this.handleClearText} handlePlaceholder={this.handlePlaceholder}/></li>
        </ul>
      </div>
    )
  }
}
const mapDispatchToProps = {
  filterPokemon
}
export default connect(null, mapDispatchToProps)(NavBar)
