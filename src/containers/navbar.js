import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/home/search';
import { filterPokemon, updateSideNav } from '../redux/actions/pokemonActions';

class NavBar extends Component {
  componentWillMount = () => {
    // document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount = () => {
    // document.removeEventListener('mousedown', this.handleClick, false);
  }

  // handleClick = (e) => {
  //   if (!this.sideNav.contains(e.target)) {
  //     this.closeSlideMenu();
  //   }
  // }

  openSlideMenu = () => {
    this.props.updateSideNav({
      width: "250px",
      burgerDisplay: "none",
      backDisplay: "block"
    })
    // this.sideNav.style.width = "";
    // this.burger.style.display = "none";
    // this.sideNavBackground.style.display = "block";
  }

  closeSlideMenu = () => {
    this.props.updateSideNav({
      width: "0px",
      burgerDisplay: "inline",
      backDisplay: "none"
    })
  }

  // Clear text on search bar
  handleClearText = (event) => {
    event.target.parentNode.firstElementChild.style.opacity = "1";
    event.target.parentNode.style.borderColor = "#fff";
    event.target.placeholder = "";

  }
//tell user to enter pokemon name in search bar
  handlePlaceholder = (event) => {
    event.target.parentNode.firstElementChild.style.opacity = "0.5"
    event.target.parentNode.style.borderColor = "#6e6865"
    event.target.placeholder= "enter pokemon"
  }
  //call redux action to search through the state for pokemon that match the entered letters
  handleSearch = (event) => {
    this.props.filterPokemon(event.currentTarget.value);
  }

  render() {
    const burgerStyle = {
      display: this.props.sideNav.burgerDisplay
    }

    const sideNavStyle = {
      width: this.props.sideNav.width
    }

    const sideNavBack = {
      backDisplay: this.props.sideNav.backDisplay
    }
    return(
      <>
        <div className="navbar">
          <ul id="navBarItems">
            <button id="burger" style={burgerStyle} href="#" onClick={this.openSlideMenu}>
              <div>
                  <span></span>
                  <span></span>
                  <span></span></div></button>
              <li className="eachnav"><Link to="/">Home</Link></li>
              <li className="eachnav"><Link to="/about">About</Link></li>
              <li className="eachnav"><Search onChange={this.handleSearch} handleClearText={this.handleClearText} handlePlaceholder={this.handlePlaceholder}/></li>
          </ul>
        </div>

        <div style={sideNavBack} className="sideNavBackground">
        </div>

        <div style={sideNavStyle} id="sideNav">
            <button><Link to="/">Home</Link></button>
            <button><Link to="/about">About</Link></button>
        </div>
      </>

    )
  }
}

const mapStateToProps = (state) => ({
    sideNav: state.pokemon.sideNav,
})

const mapDispatchToProps = {
  filterPokemon,
  updateSideNav
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
