import React from 'react'

const Burger = ({ isSideNavOpen, toggleSideNav }) => (
  <>
    <button id="navbar__burger"
      className={isSideNavOpen ? "no-burger" : "yes-burger"}
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
