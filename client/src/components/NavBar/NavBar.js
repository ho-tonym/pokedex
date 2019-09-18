import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../HomePage/search'
import SideNav from './sidenav'
import NavBarComponent from './navbarcomponent'
import LoadBar from './loadbar'
import {
  filterPokemon,
  toggleSideNav,
  updateSeachCSS,
  updateSearchState,
} from '../../redux/actions/pokemonActions'
import './navbar.min.css';

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
        <SideNav
          sideNav={sideNav}
          toggleSideNav={toggleSideNav}
        />
        <NavBarComponent
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
  const { sideNav, searchFocused, searchString, isFetching, filteredPokemon } = state.pokemon
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
