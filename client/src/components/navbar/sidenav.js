import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = ({ sideNav, toggleSideNav }) => (
  <>
    <div className={`side-nav-background ${sideNav ? "open-side-nav-back" : "close-side-nav-back"}`} />
    <div className={`side-nav ${sideNav ? "open-side-nav" : "close-side-nav"}`}>
      <button id="side-nav__close" type="button" onClick={toggleSideNav}>X</button>
      <button type="button"><Link to="/">Home</Link></button>
      <button type="button"><Link to="/mypokemon">My Pokemon</Link></button>
      <button type="button"><Link to="/faq">Faq</Link></button>
    </div>
  </>
)

export default SideNav
