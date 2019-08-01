import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../components/home/search'
import SideNav from '../components/navbar/sidenav'
import NavBarComponent from '../components/navbar/navbarcomponent'
import LoadBar from '../components/navbar/loadbar'
import {
  filterPokemon,
  toggleSideNav,
  updateSeachCSS,
  updateSearchState,
} from '../redux/actions/pokemonActions'

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
