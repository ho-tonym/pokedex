import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  filterPokemon,
} from '../../redux/actions/pokemonActions'
import {
  updateSeachCSS,
  toggleSideNav,
  updateSearchState,
} from '../../redux/actions/UIActions'

class SideNav extends Component {
  render() {
    const { sideNav } = this.props // state
    const { toggleSideNav } = this.props // actions
    return(
      <>
        <div className={`side-nav-background ${sideNav ? "open-side-nav-back" : "close-side-nav-back"}`} />
        <div className={`side-nav ${sideNav ? "open-side-nav" : "close-side-nav"}`}>
          <button id="side-nav__close" type="button" onClick={toggleSideNav}>X</button>
          <button type="button"><Link to="/">Home</Link></button>
          <button type="button"><Link to="/mypokemon">My Pokemon</Link></button>
          <button type="button"><Link to="/faq">Faq</Link></button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const { isFetching, filteredPokemon } = state.pokemon
  const { sideNav, searchFocused, searchString } = state.UI
  return{
    sideNav,
    searchFocused,
    searchString,
    isFetching,
    filteredPokemon,
  }
}

const mapDispatchToProps = {
  filterPokemon,
  toggleSideNav,
  updateSeachCSS,
  updateSearchState,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
