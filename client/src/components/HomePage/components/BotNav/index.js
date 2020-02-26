import { connect } from 'react-redux'
import React, { Component } from 'react'
import uuid from 'uuid'

import { fetchOnePokemon } from '../../../../redux/actions/pokemonActions'
import WeaknessAdvantage from './components/weaknessAdvantage'
import RecommendedList from './components/recommendedList'

import TypeImage from '../../../general/typeimage'
import jsonTypes from '../../../../assets/json/types.json'
import calculateDefence from './functions/calculatedefence'
import typeImagesImport from '../../../../assets/images/typeImages'
import './BotNav.min.css';

class BotNav extends Component {
  componentWillMount() {
    const { fetchOnePokemon, onePokemonData } = this.props
    if(!onePokemonData.name) {
      fetchOnePokemon("charizard")
    }
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  expandOnePokemon = () => {
    if (this.pokemonType.style.transform === "translateY(70px)") {
      this.pokemonType.style.transform = "translateY(100%)"
    }else{
      this.pokemonType.style.transform = "translateY(70px)"
    }
  }

  closeOnePokemon = () => {
    this.pokemonType.style.transform = "translateY(100%)"
  }

  handleClick = (e) => {
    if (!this.pokemonType.contains(e.target)) {
      this.closeOnePokemon()
    }
  }

  createTypesButtons = () => {
    const { onePokemonData } = this.props
    if (!onePokemonData.types) return
    const typesArray = onePokemonData.types.map(e => (
      <TypeImage
        key={uuid.v4()}
        type={e.type.name}
        color={jsonTypes[e.type.name].color}
        img={typeImagesImport[e.type.name]}
      />
    ))
    return typesArray
  }

  createTypes = (array, arrayTypeImage) => {
    if (array.length > 0) {
      array.forEach(e => {
        arrayTypeImage.push(
          <TypeImage
            key={uuid.v4()}
            type={e}
            color={jsonTypes[e].color}
            img={typeImagesImport[e]}
          />,
        )
      })
    }
  }

  render() {
    const { onePokemonData, myPokemon } = this.props
    let defence = {}
    if(onePokemonData.types) {
      const typesArray = onePokemonData.types.map(e => e.type.name)
      defence = calculateDefence(typesArray)
      this.createTypesButtons(onePokemonData.types)
    }
    return (
      <div className="bot-nav-container" ref={(pokemonType) => { this.pokemonType = pokemonType }}>
        <button className="bot-nav" type="button" onClick={this.expandOnePokemon}>
          {this.createTypesButtons()}
        </button>
        <div className="bot-nav__scrollable scrollable">
          <h2 className="capitalize">{onePokemonData.name}</h2>
          <hr />
          {defence.take2 && <WeaknessAdvantage defence={defence} />}
          {myPokemon.length > 0 && defence.take2 && <RecommendedList defence={defence} myPokemon={myPokemon} /> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  onePokemonData: state.pokemon.onePokemonData,
  myPokemon: state.pokemon.myPokemon,
})
const mapDispatchToProps = {
  fetchOnePokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(BotNav)
