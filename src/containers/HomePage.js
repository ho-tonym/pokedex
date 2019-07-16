import { connect } from 'react-redux';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { fetchPokemon, submitPokemon, fetchOnePokemon } from '../redux/actions/pokemonActions';
import PokemonList from '../components/home/_pokemonlist';

class HomePage extends Component {

  componentWillMount() {
    const { allFetchedPokemon, fetchPokemon } = this.props;
    if(this.isObjectEmpty(allFetchedPokemon)) {
      fetchPokemon();
    }
  }

  isObjectEmpty = (Obj) => {
    for(let key in Obj) {
      if(Obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }


  handleActiveOnePokemon = (event) => {
    this.props.fetchOnePokemon(event.currentTarget.id);
  }

  render() {
    const { searchedPokemonList, allFetchedPokemon, handleActiveOnePokemon } = this.props;
    return (
      <div className="HomePage">
        <PokemonList searchedPokemonList={searchedPokemonList}
          allFetchedPokemon={allFetchedPokemon}
          handleActiveOnePokemon={this.handleActiveOnePokemon}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokemon.fetchOnePokemon,
  allFetchedPokemon: state.pokemon.pokemon,
  searchedPokemonList: state.pokemon.filteredPokemon,
});

const mapDispatchToProps = {
  fetchPokemon,
  submitPokemon,
  fetchOnePokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
