import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './burger'

const NavBarComponent = ({ sideNav, toggleSideNav }) => (
  <>
    <div className="navbar">
      <ul id="navbar__list">
        <Burger
          sideNav={sideNav}
          toggleSideNav={toggleSideNav}
        />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mypokemon">My Pokemon</Link></li>
        <li><Link to="/faq">Faq</Link></li>
      </ul>
    </div>
  </>
)

export default NavBarComponent
