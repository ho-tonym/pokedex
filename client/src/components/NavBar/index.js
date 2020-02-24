import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  filterPokemon,
} from '../../redux/actions/pokemonActions'
import {
  updateSeachCSS,
  toggleSideNav,
  updateSearchState,
} from '../../redux/actions/UIActions'

import './navbar.min.css';
import Search from './components/Search'
import NavBarContent from './components/NavBarContent'
import LoadBar from './components/LoadBar'

class NavBar extends Component {
  handleSearch = (event) => {
    const { value } = event.currentTarget
    const { updateSearchState, filterPokemon } = this.props;
    updateSearchState(value)
    filterPokemon(value)
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
    const { sideNav, searchFocused, searchString, isFetching } = this.props // state
    const { toggleSideNav } = this.props // actions
    const { handleBlur, handleFocus, handleSearch } = this
    return(
      <>
        <NavBarContent
          sideNav={sideNav}
          toggleSideNav={toggleSideNav}
        />
        <LoadBar isFetching={isFetching} />
        <Search
          onChange={handleSearch}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          searchFocused={searchFocused}
          searchString={searchString}
        />
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
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
