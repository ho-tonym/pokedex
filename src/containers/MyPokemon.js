import { connect } from 'react-redux'
import React, { Component } from 'react'
import uuid from 'uuid'
import { fetchMyPokemon, submitPokemon, updateMyPokeInputs } from '../redux/actions/pokemonActions'
// import EachPokemon from '../components/home/eachpokemon'


class MyPokemon extends Component {
  componentWillMount() {

  }

  handleSubmit = () => {
    // Object.keys(stateProps.fields).map((field) => {
    //   console.log(`${field}: ${stateProps.fields[field]}`);
  }

  handleChange = (event) => {
    this.props.updateMyPokeInputs(event.currentTarget.id, event.currentTarget.value);
  }

  render() {
    const { myPokemon, myPokeInputs } = this.props
    const myPokemonList = myPokemon.map((eachPokemon) => {
      return(
        <div key={uuid.v4()}>
          <h3>{eachPokemon.name}</h3>
          <p>{eachPokemon.cp}</p>
        </div>
      )
    })
    return (
      <div className="MyPokemon">
        <p>add pokemon</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Pokemon:
            <input id="name"
              onChange={this.handleChange}
              value={myPokeInputs.name}
              type="text"
            />

          </label>
          <label htmlFor="cp">
            CP:
            <input id="cp"
              onChange={this.handleChange}
              value={myPokeInputs.cp}
              type="text"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <hr />

        <p>unique id - restore saved items</p>
        <hr />
        <h1>My Pokemon</h1>
        {myPokemonList}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  myPokemon: state.pokemon.myPokemon || "",
  myPokeInputs: state.pokemon.myPokeInputs || "",
})

const mapDispatchToProps = {
  fetchMyPokemon,
  submitPokemon,
  updateMyPokeInputs,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)
//           <input type="submit" value="Submit" />
// export default connect(mapStateToProps, mapDispatchToProps)(MyPokemon)
