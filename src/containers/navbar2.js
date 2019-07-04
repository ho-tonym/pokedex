import {filterPokemon} from '../redux/actions/pokemonActions'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Search from '../components/home/search'
import {connect} from 'react-redux'

class NavBar extends Component {

  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick = (e) => {
    if (this.sideNav.contains(e.target)){
      return;
    }
    else{
      this.closeSlideMenu();
    }
  }

  openSlideMenu = (event) => {
    this.sideNav.style.width = "250px"
    this.burger.style.display = "none"
    this.sideNavBackground.style.display = "block"
  }

  closeSlideMenu = (event) => {
    this.sideNav.style.width = "0px"
    this.burger.style.display = "inline"
    this.sideNavBackground.style.display = "none"
  }

  handleClearText = (event) => {
    event.target.parentNode.firstElementChild.style.opacity = "1"
    event.target.parentNode.style.borderColor = "#fff"
    event.target.placeholder= ""

  }
  handlePlaceholder = (event) => {
    event.target.parentNode.firstElementChild.style.opacity = "0.5"
    event.target.parentNode.style.borderColor = "#6e6865"
    event.target.placeholder= "enter pokemon"
  }
  handleSearch = (event) => {
    this.props.filterPokemon(event.currentTarget.value);
  }

  render(){
    return(
      <React.Fragment>
        <div className="navbar">
          <ul id="navBarItems">
            <button id="burger" ref={(burger)=>{this.burger = burger}} href="#" onClick={this.openSlideMenu}>
              <div>
                  <span></span>
                  <span></span>
                  <span></span></div></button>
              <li className="eachnav"><Link to="/">Home</Link></li>
              <li className="eachnav"><Link to="/about">About</Link></li>
              <li className="eachnav"><Search onChange={this.handleSearch} handleClearText={this.handleClearText} handlePlaceholder={this.handlePlaceholder}/></li>
          </ul>
        </div>

        <div ref={(sideNavBackground)=>{this.sideNavBackground = sideNavBackground}} className="sideNavBackground">
        </div>

        <div ref={(sideNav)=>{this.sideNav = sideNav}} id="sideNav">
            <button><Link to="/">Home</Link></button>
            <button><Link to="/about">About</Link></button>
        </div>
      </React.Fragment>

    )
  }
}


const mapDispatchToProps = {
  filterPokemon
}
export default connect(null, mapDispatchToProps)(NavBar)

              // <li className="eachnav"><Link to="/mypokemon">My Pokemon</Link></li>

// <button><Link to="/mypokemon">My Pokemon</Link></button>
