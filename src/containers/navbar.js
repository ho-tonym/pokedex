import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Search from '../components/home/search'
import {
  filterPokemon,
  toggleSideNav,
  updateSeachCSS,
  updateSearchState,
} from '../redux/actions/pokemonActions'

class NavBar extends Component {
  // "no-shadow": "off" -> redux/import/destructure
  // call redux action to search through the state for pokemon that match the entered letters
  handleSearch = (event) => {
    const { updateSearchState, filterPokemon } = this.props;
    updateSearchState(event.currentTarget.value)
    filterPokemon(event.currentTarget.value)
  }

  handleBlur = () => {
    const { updateSeachCSS, updateSearchState } = this.props;
    updateSeachCSS(false)
    updateSearchState("")
  }

  handleFocus = () => {
    this.props.updateSeachCSS(true)
  }

  render() {
    const { sideNav, searchFocused, searchString } = this.props // state
    const { toggleSideNav, updateSeachCSS } = this.props // actions
    const { handleBlur, handleFocus, handleSearch } = this
    return(
      <>
        <div
          className="side-nav-background"
          id={sideNav ? "open-side-nav-back" : "close-side-nav-back"}
        />
        <div className="navbar">
          <ul id="navbar__list">
            <button id="navbar__burger"
              className={sideNav ? "no-burger" : "yes-burger"}
              type="button"
              href="#"
              onClick={toggleSideNav}
            >
              <div>
                <span />
                <span />
                <span />
              </div>
            </button>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <Search
          onChange={handleSearch}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          searchFocused={searchFocused}
          searchString={searchString}
        />

        {/* <div className="load-bar" />
        // none and block
      */}
        <div id={sideNav ? "open-side-nav" : "close-side-nav"} className="side-nav">
          <button type="button" onClick={toggleSideNav}><Link to="/">X</Link></button>
          <button type="button"><Link to="/">Home</Link></button>
          <button type="button"><Link to="/about">About</Link></button>
        </div>
      </>

    )
  }
}

const mapStateToProps = (state) => ({
  sideNav: state.pokemon.sideNav,
  searchFocused: state.pokemon.searchFocused,
  searchString: state.pokemon.searchString,
})

const mapDispatchToProps = {
  filterPokemon,
  toggleSideNav,
  updateSeachCSS,
  updateSearchState,
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
