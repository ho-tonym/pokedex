import React from 'react'

const Burger = ({ sideNav, toggleSideNav }) => (
  <>
    <button id="navbar__burger"
      className={sideNav ? "no-burger" : "yes-burger"}
      type="button"
      href="#"
      onClick={toggleSideNav}
    >
      <div>
        <span />
        <span />
        <span />
      </div>
    </button>
  </>
)

export default Burger
