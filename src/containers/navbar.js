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
    const { updateSeachCSS } = this.props
    updateSeachCSS(true)
  }

  render() {
    const {
      sideNav,
      searchFocused,
      searchString,
      isFetching,
    } = this.props // state
    const { toggleSideNav } = this.props // actions
    const { handleBlur, handleFocus, handleSearch } = this
    return(
      <>
        <div className={`side-nav-background ${sideNav ? "open-side-nav-back" : "close-side-nav-back"}`} />
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
            <li><Link to="/mypokemon">My Pokemon</Link></li>
          </ul>
        </div>
        <Search
          onChange={handleSearch}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          searchFocused={searchFocused}
          searchString={searchString}
        />
        <div className={`side-nav ${sideNav ? "open-side-nav" : "close-side-nav"}`}>
          <button type="button" onClick={toggleSideNav}>X</button>
          <button type="button"><Link to="/">Home</Link></button>
          <button type="button"><Link to="/about">About</Link></button>
          <button type="button"><Link to="/mypokemon">My Pokemon</Link></button>
        </div>
      </>

    )
  }
}

const mapStateToProps = (state) => {
  const { sideNav, searchFocused, searchString, isFetching } = state.pokemon
  return{
    sideNav,
    searchFocused,
    searchString,
    isFetching,
  }
}

const mapDispatchToProps = {
  filterPokemon,
  toggleSideNav,
  updateSeachCSS,
  updateSearchState,
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
