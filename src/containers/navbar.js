import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../components/home/search'
import SideNav from '../components/navbar/sidenav'
import NavBarComponent from '../components/navbar/navbarcomponent'
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
        <div className={`load-bar ${isFetching ? "w-35" : "w-100"}`} />
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
