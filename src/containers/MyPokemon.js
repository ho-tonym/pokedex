import { connect } from 'react-redux'
import React, { Component } from 'react'
import uuid from 'uuid'
import _ from 'lodash'
import { submitPokemon, updateMyPokeInputs, sendToBackend, getFromBackend, updateSelectedOption, updateMyPokeInputsState, updateShowCheckMark, fetchPokemon, fetchOnePokemon } from '../redux/actions/pokemonActions'
import Form from '../components/mypokemon/form'
import MyPokemonList from '../components/mypokemon/mypokemonlist'

class MyPokemon extends Component {
  componentDidUpdate(prevProps) {
    const { myPokeInputs } = this.props

    if(prevProps.myPokeInputs.cp !== myPokeInputs.cp) {
      this.handleCheckValid("cp")
    }else if (prevProps.myPokeInputs.name !== myPokeInputs.name) {
      this.handleCheckValid("name")
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { submitPokemon, selectedOption } = this.props

    if (selectedOption === "add-pokemon") {
      submitPokemon();
    } else if (selectedOption === "save-pokemon") {
      this.handleCreateURL();
    } else if (selectedOption === "get-pokemon") {
      this.handleGetFromBackend(event);
    }
  }

  handleChange = (event) => {
    const { updateMyPokeInputs } = this.props
    let newValue = ""
    if (event.currentTarget.id === "name") {
      newValue = event.currentTarget.value.toLowerCase()
    }else if(event.currentTarget.id === "cp") {
      newValue = event.currentTarget.value
    }
    updateMyPokeInputs(event.currentTarget.id, newValue)
  }

  handleGetAllPokemon = _.debounce(() => { // eslint-disable-line react/sort-comp
    const { fetchPokemon, pokemon } = this.props
    fetchPokemon(pokemon.length, true)
  }, 1500)

  handleCheckValid = field => {
    const { updateShowCheckMark, myPokeInputs, pokemon, apiHasMore } = this.props

    if (field === "name" && pokemon.find(x => x.name === myPokeInputs.name)) {
      updateShowCheckMark(field, true, myPokeInputs.name)
    }else if (field === "cp" && myPokeInputs.cp.length > 0 && myPokeInputs.cp > 0 && myPokeInputs.cp < 9999) {
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
    // this.handleCheckValid("name") this prevents cp from being validated
  }

  handleBlur = (event) => {
    const { updateMyPokeInputsState } = this.props
    updateMyPokeInputsState(event.target.id, false)
    // this.handleCheckValid("name")
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
