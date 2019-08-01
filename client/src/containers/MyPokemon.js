import { connect } from 'react-redux'
import React, { Component } from 'react'
import uuid from 'uuid'
import _ from 'lodash'
import { submitPokemon, updateMyPokeInputs, sendToBackend, getFromBackend, updateSelectedOption, updateMyPokeInputsState, updateShowCheckMark, fetchPokemon, fetchOnePokemon } from '../redux/actions/pokemonActions'
import Form from '../components/mypokemon/form'
import MyPokemonList from '../components/mypokemon/mypokemonlist'

class MyPokemon extends Component {
  handleGetAllPokemon = _.debounce(() => {
    const { fetchPokemon, pokemon } = this.props
    fetchPokemon(pokemon.length, true)
  }, 1500)

  componentDidUpdate(prevProps) {
    const { myPokeInputs } = this.props
    const { cp, name } = prevProps.myPokeInputs

    if(cp !== myPokeInputs.cp) {
      this.handleCheckValid("cp")
    }else if (name !== myPokeInputs.name) {
      this.handleCheckValid("name")
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { submitPokemon, selectedOption } = this.props

    switch(selectedOption) {
      case "add-pokemon":
        submitPokemon()
        break
      case "save-pokemon":
        this.handleCreateURL()
        break
      case "get-pokemon":
        this.handleGetFromBackend(event)
        break
      default:
        break
    }
  }

  handleChange = (event) => {
    const { updateMyPokeInputs } = this.props
    const { id, value } = event.currentTarget
    let newValue = ""
    if (id === "name") {
      newValue = value.toLowerCase()
    }else if(id === "cp" || id === "id") {
      newValue = value
    }
    updateMyPokeInputs(id, newValue)
  }

  handleCheckValid = field => {
    const { updateShowCheckMark, myPokeInputs, pokemon, apiHasMore } = this.props
    const { name, cp } = myPokeInputs
    if (field === "name" && pokemon.find(x => x.name === name)) {
      updateShowCheckMark(field, true, name)
    }else if (field === "cp" && cp.length > 0 && cp > 0 && cp < 9999) {
      updateShowCheckMark(field, true)
    }else{
      updateShowCheckMark(field, false)
      if(field === "name" && apiHasMore) {
        this.handleGetAllPokemon()
      }
    }
  }

  handleCreateURL = () => {
    const { sendToBackend } = this.props
    const key = uuid.v4()
    sendToBackend(key)
  }

  handleGetFromBackend = (event) => {
    const { getFromBackend } = this.props
    event.preventDefault()
    getFromBackend()
  }

  handleOptionChange = (event) => {
    const { updateSelectedOption } = this.props
    updateSelectedOption(event.target.id)
  }

  handleFocus = (event) => {
    const { updateMyPokeInputsState } = this.props
    updateMyPokeInputsState(event.target.id, true)
  }

  handleBlur = (event) => {
    const { updateMyPokeInputsState } = this.props
    updateMyPokeInputsState(event.target.id, false)
  }

  render() {
    const { myPokemon, myPokeInputs, id, selectedOption, showCheckMark, isFetching } = this.props
    return (

      <div className="MyPokemon">
        <h1>My Pokemon</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleOptionChange={this.handleOptionChange}
          selectedOption={selectedOption}
          myPokeInputs={myPokeInputs}
          handleChange={this.handleChange}
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
          showCheckMark={showCheckMark}
          id={id}
          isFetching={isFetching}
        />
        <MyPokemonList
          myPokemon={myPokemon}
        />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  const { myPokemon, myPokeInputs, id, selectedOption, pokemon, showCheckMark, apiHasMore, isFetching } = state.pokemon
  return{
    myPokemon,
    myPokeInputs,
    id,
    selectedOption,
    pokemon,
    showCheckMark,
    apiHasMore,
    isFetching,
  }
}

const mapDispatchToProps = {
  submitPokemon,
  updateMyPokeInputs,
  sendToBackend,
  getFromBackend,
  updateSelectedOption,
  updateMyPokeInputsState,
  updateShowCheckMark,
  fetchPokemon,
  fetchOnePokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)
