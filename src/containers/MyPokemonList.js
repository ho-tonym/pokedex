import {connect} from 'react-redux'
import React, { Component } from 'react'

import {fetchMyPokemon} from '../redux/actions/pokemonActions'
import MyPokemon from '../components/user/_mypokemon'
import AddButton from '../components/user/addbutton'
import Form from '../components/user/form'


class MyPokemonList extends Component {

  componentWillMount(){
    this.props.fetchMyPokemon();
  }

  render() {
    return (
      <React.Fragment>
        <MyPokemon myPokemon={this.props.myPokemon}/>
        <Form />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myPokemon: state.pokemon.myPokemon,
    currentSubmittedPokemon: state.pokemon.currentSubmittedPokemon
  }
}

const mapDispatchToProps = {
  fetchMyPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonList)
