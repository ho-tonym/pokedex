import { connect } from 'react-redux'
import React, { Component } from 'react'
import uuid from 'uuid'
import _ from 'lodash'

import { submitPokemon, updateMyPokeInputs, sendToBackend, getFromBackend, updateSelectedOption, updateMyPokeInputsState, fetchOnePokemon, updateShowCheckMark } from '../redux/actions/pokemonActions'
import EachMyPokemon from '../components/mypokemon/eachmypokemon'

class MyPokemon extends Component {
  handleSubmit = (event) => { // eslint-disable-line react/sort-comp
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
    updateMyPokeInputs(event.currentTarget.id, event.currentTarget.value);
    // this.handleGetAllPokemon()
    this.handleCheckValid(event.currentTarget.id)
  }

  handleCheckValid = _.debounce((field) => {
    const { updateShowCheckMark, myPokeInputs } = this.props
    if (field === "name" && myPokeInputs.name.length > 0) {
      updateShowCheckMark(field, true)
    }else if (field === "cp" && myPokeInputs.cp.length > 0 && myPokeInputs.cp > 0 && myPokeInputs.cp < 9999) {
      updateShowCheckMark(field, true)
    }else{
      updateShowCheckMark(field, false)
    }
  })

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
    const { myPokemon, myPokeInputs, id, selectedOption, showCheckMark } = this.props
    const myPokemonList = myPokemon.map(eachPokemon => (
      <EachMyPokemon
        key={uuid.v4()}
        eachPokemon={eachPokemon.name}
        cp={eachPokemon.cp}
        classname="each-pokemon-button-disable"
      />
    ))
    return (
      <div className="MyPokemon">
        <div className="flex-wrap">
          <form onSubmit={this.handleSubmit}>
            <input className="radio"
              type="radio"
              name="rg"
              id="add-pokemon"
              checked={selectedOption === 'add-pokemon'}
              onChange={this.handleOptionChange}
            />
            <input className="radio"
              type="radio"
              name="rg"
              id="save-pokemon"
              checked={selectedOption === 'save-pokemon'}
              onChange={this.handleOptionChange}
            />
            <input className="radio"
              type="radio"
              name="rg"
              id="get-pokemon"
              checked={selectedOption === 'get-pokemon'}
              onChange={this.handleOptionChange}
            />

            <label htmlFor="add-pokemon">Add</label>
            <label htmlFor="save-pokemon">Save</label>
            <label htmlFor="get-pokemon">Get</label>

            <input
              id="name"
              className="input add-pokemon"
              placeholder="Name"
              value={myPokeInputs.name}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <input
              id="cp"
              className="input add-pokemon"
              placeholder="CP"
              value={myPokeInputs.cp}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <p className="input save-pokemon">
              {id === "" ? "Save your pokemon to the database for future use!"
                : 'Use this code in "Get" section to retrieve your pokemon'
              }
            </p>
            <input id="id" className="input get-pokemon" type="text" placeholder="ID" value={myPokeInputs.id} onChange={this.handleChange} />
            {selectedOption === 'save-pokemon' ? <p className="font-13-blue">{id}</p> : null}
            <button
              className="rounded-button blue-button"
              type="submit"
              disabled={selectedOption === 'add-pokemon' && !showCheckMark.name && !showCheckMark.cp}
            />
            { showCheckMark.name ? <div className="check check-name" /> : null }
            { showCheckMark.cp ? <div className="check check-cp" /> : null }
          </form>
        </div>

        <div className="my-pokemon-list pad-top-20">
          <h3>My Pokemon</h3>
          {myPokemonList}
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  myPokemon: state.pokemon.myPokemon || "",
  myPokeInputs: state.pokemon.myPokeInputs || "",
  id: state.pokemon.id || "",
  selectedOption: state.pokemon.selectedOption,
  pokemon: state.pokemon.pokemon,
  showCheckMark: state.pokemon.showCheckMark,
})

const mapDispatchToProps = {
  // fetchMyPokemon,
  submitPokemon,
  updateMyPokeInputs,
  sendToBackend,
  getFromBackend,
  updateSelectedOption,
  updateMyPokeInputsState,
  fetchOnePokemon,
  updateShowCheckMark,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)
//           <input type="submit" value="Submit" />
// export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)
