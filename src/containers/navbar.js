import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/home/search';
import { filterPokemon, updateSideNav } from '../redux/actions/pokemonActions';

class NavBar extends Component {
  openSlideMenu = () => {
    this.props.updateSideNav({
      width: "250px",
      burgerDisplay: "none",
      backDisplay: "block",
    });
  }

  closeSlideMenu = () => {
    this.props.updateSideNav({
      width: "0px",
      burgerDisplay: "inline",
      backDisplay: "none",
    })
  }

  // Clear text on search bar
  // Focus
  handleClearText = (event) => {
    event.target.parentNode.style.borderColor = "#fff";
    event.target.placeholder = "";
  }

// NOT Focused
  handlePlaceholder = (event) => {
    event.target.parentNode.style.borderColor = "#6e6865"
    event.target.placeholder= "enter pokemon"
  }
  // call redux action to search through the state for pokemon that match the entered letters
  handleSearch = (event) => {
    this.props.filterPokemon(event.currentTarget.value);
  }

  render() {
    const { sideNav } = this.props;

    const burgerStyle = {
      display: sideNav.burgerDisplay,
    };

    const sideNavStyle = {
      width: sideNav.width,
    };

    const sideNavBack = {
      backDisplay: sideNav.backDisplay,
    };
    return(
      <>
        <div className="navbar">
          <ul id="navbar__list">
            <button id="navbar__burger" type="button" style={burgerStyle} href="#" onClick={this.openSlideMenu}>
              <div>
                <span />
                <span />
                <span />
              </div>
            </button>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <Search
                onChange={this.handleSearch}
                handleClearText={this.handleClearText}
                handlePlaceholder={this.handlePlaceholder}
              />
            </li>
          </ul>
        </div>

        <div id="side-nav" style={sideNavStyle}>
          <button type="button" onClick={this.closeSlideMenu}><Link to="/">X</Link></button>
          <button type="button"><Link to="/">Home</Link></button>
          <button type="button"><Link to="/about">About</Link></button>
        </div>
      </>

    );
  }
}

const mapStateToProps = (state) => ({
  sideNav: state.pokemon.sideNav,
});

const mapDispatchToProps = {
  filterPokemon,
  updateSideNav,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
