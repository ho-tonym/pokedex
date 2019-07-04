import {fetchPokemon, submitPokemon, fetchOnePokemon} from '../redux/actions/pokemonActions'
import {connect} from 'react-redux'
import React, { Component } from 'react'
import PokemonList from '../components/home/_pokemonlist'

class HomePage extends Component {

  componentWillMount(){
    if(this.isObjectEmpty(this.props.allFetchedPokemon))
    {
      this.props.fetchPokemon();
    }
  }

  isObjectEmpty = (Obj) => {
    for(let key in Obj) {
      if(Obj.hasOwnProperty(key))
        return false;
      }
    return true;
  }

  handleOnePokemonClick = (event) => {
    this.props.fetchOnePokemon(event.currentTarget.id);
  }

  handleActiveOnePokemon = (event) => {
    this.handleOnePokemonClick(event);
  }
    render() {
      return (
        <div className="HomePage">
            <PokemonList searchedPokemonList={this.props.searchedPokemonList} allFetchedPokemon={this.props.allFetchedPokemon} handleClick={this.handleClick}
              handleActiveOnePokemon={this.handleActiveOnePokemon}/>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    pokeData: state.pokemon.fetchOnePokemon,
    allFetchedPokemon: state.pokemon.pokemon,
    searchedPokemonList: state.pokemon.filteredPokemon
  }
}

const mapDispatchToProps = {
  fetchPokemon,
  submitPokemon,
  fetchOnePokemon
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
