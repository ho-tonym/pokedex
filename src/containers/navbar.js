import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/home/search';
import { filterPokemon, toggleSideNav, updateSeachCSS, updateSearchState } from '../redux/actions/pokemonActions';

class NavBar extends Component {
  // call redux action to search through the state for pokemon that match the entered letters
  handleSearch = (event) => {
    this.props.updateSearchState(event.currentTarget.value);
    this.props.filterPokemon(event.currentTarget.value);
  }

  handleBlur = (event) => {
    this.props.updateSeachCSS(false)
    this.props.updateSearchState("");
  }

  handleFocus = () => {
    this.props.updateSeachCSS(true);
  }

  render() {
    const { sideNav } = this.props;
    return(
      <>
        <div className="navbar">
          <ul id="navbar__list">
            <button id="navbar__burger"
              className={sideNav ? "no-burger" : "yes-burger"}
              type="button"
              href="#"
              onClick={this.props.toggleSideNav}
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
          onChange={this.handleSearch}
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          searchFocused={this.props.searchFocused}
          searchString={this.props.searchString}
        />

        <div id={this.props.sideNav ? "open-side-nav" : "close-side-nav"} className="side-nav">
          <button type="button" onClick={this.props.toggleSideNav}><Link to="/">X</Link></button>
          <button type="button"><Link to="/">Home</Link></button>
          <button type="button"><Link to="/about">About</Link></button>
        </div>
      </>

    );
  }
}

const mapStateToProps = (state) => ({
  sideNav: state.pokemon.sideNav,
  searchFocused: state.pokemon.searchFocused,
  searchString: state.pokemon.searchString,
});

const mapDispatchToProps = {
  filterPokemon,
  toggleSideNav,
  updateSeachCSS,
  updateSearchState,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
