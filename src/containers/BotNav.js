import { connect } from 'react-redux'
import React, { Component } from 'react'
import uuid from 'uuid'

import { fetchOnePokemon } from '../redux/actions/pokemonActions'
import WeaknessAdvantage from '../components/botnav/weaknessAdvantage'
import RecommendedList from '../components/botnav/recommendedList'

import TypeImage from '../components/general/typeimage'
import jsonTypes from '../json/types.json'
import typeImagesImport from '../images/typeImages'

class BotNav extends Component {
  componentWillMount() {
    const { fetchOnePokemon, onePokemonData } = this.props
    if(!onePokemonData.name) {
      fetchOnePokemon("pidgeotto")
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

  createTypesButtons = (typesArray, typeImages) => {
    const { onePokemonData } = this.props
      this.props.onePokemonData.types.forEach(e => {
        typesArray.push(e.type.name)
        typeImages.push(
          <TypeImage
            key={uuid.v4()}
            type={e.type.name}
            color={jsonTypes[e.type.name].color}
            img={typeImagesImport[e.type.name]}
          />,
        )
      })


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

  findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

  reCalculateDefences = (take2Array, take05Array) => {
    const newArray = take05Array.concat(take2Array).flat()
    const duplicates = [...new Set(this.findDuplicates(newArray))]
    if (duplicates > 0) {
      duplicates.forEach(e => {
        take2Array.splice(take2Array.indexOf(e), 1)
        take05Array.splice(take05Array.indexOf(e), 1)
      })
    }
}
    calculateDefence(takeArray, dmgString, typesArray, take4Array, take025Array) {
    let jsonArray = []
    typesArray.forEach((e) => {
      jsonArray.push(jsonTypes[e][dmgString])
    })
    jsonArray = jsonArray.flat()

    const duplicates = [...new Set(this.findDuplicates(jsonArray.flat()))] // all unique duplicates

    if (dmgString === "take2") {
      duplicates.forEach((e) => {
        take4Array.push(e)
      })
    } else if(dmgString === "take05") {
      duplicates.forEach((e) => {
        take025Array.push(e)
      })
    }

    duplicates.forEach((type) => {
      jsonArray = jsonArray.filter((element) => type !== element)
    })

    jsonArray.flat().map(e => (
      takeArray.push(e)
    ))
    console.log(takeArray)
  }

  render() {
    const typeImages = [] // types button that is returned
    const take4 = []
    const take2 = []
    const take05 = []
    const take025 = []
    const take0 = []

    const typesArray = []
    const take4Array = []
    const take2Array = []
    const take05Array = []
    const take025Array = []
    const take0Array = []
    const { onePokemonData, myPokemon, handleGetAllPokemon } = this.props
    if(onePokemonData.types){this.createTypesButtons(typesArray, typeImages)}
    this.calculateDefence(take2Array, "take2", typesArray, take4Array, take025Array)
    this.calculateDefence(take05Array, "take05", typesArray, take4Array, take025Array)
    this.calculateDefence(take0Array, "take0", typesArray, take4Array, take025Array)
    this.reCalculateDefences(take2Array, take05Array)
    this.createTypes(take0Array, take0)
    this.createTypes(take025Array, take025)
    this.createTypes(take05Array, take05)
    this.createTypes(take2Array, take2)
    this.createTypes(take4Array, take4)


    return (
      <div className="bot-nav-container" ref={(pokemonType) => { this.pokemonType = pokemonType }}>
        <button className="bot-nav" type="button" onClick={this.expandOnePokemon}>
          {typeImages}
        </button>
        <div className="bot-nav__scrollable scrollable">
          <h2 className="capitalize">{onePokemonData.name}</h2>
          <button type="button" onClick={handleGetAllPokemon} />
          <hr />
          <WeaknessAdvantage
            take2={take2}
            take05={take05}
            take0={take0}
            take4={take4}
            take025={take025}
          />
          {myPokemon > 0 ? <RecommendedList /> : null}
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
