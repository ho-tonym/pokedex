import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleDiv } from '../redux/actions/pokemonActions'

class Faq extends Component {
  handleonClick = (event) => {
    const { toggleDiv } = this.props
    const { id } = event.currentTarget
    toggleDiv(id)
  }

  render() {
    const { collapseDivs } = this.props
    return (
      <div className="Faq">
        <h1>FAQ</h1>
        <button
          id="collapse-1"
          type="button"
          className="collapsible"
          onClick={this.handleonClick}
        >
          How To Use: Home
          <span />
        </button>
        <div className={`content ${collapseDivs["collapse-1"] ? "display-block" : ""}`}>
          <p>Pokemon data populated from pokeapi.co.</p>
        </div>
        <button
          id="collapse-2"
          type="button"
          className="collapsible"
          onClick={this.handleonClick}
        >
          How To Use: My Pokemon
        </button>
        <div className={`content ${collapseDivs["collapse-2"] ? "display-block" : ""}`}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <button
          id="collapse-3"
          type="button"
          className="collapsible"
          onClick={this.handleonClick}
        >
          Nerd Stuff - How it the website works
        </button>
        <div className={`content ${collapseDivs["collapse-3"] ? "display-block" : ""}`}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { collapseDivs } = state.pokemon
  return{
    collapseDivs,
  }
}

const mapDispatchToProps = {
  toggleDiv,
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
