import { connect } from 'react-redux'
import React, { Component } from 'react'
import _ from 'lodash'
import './HomePage.min.css';
import { fetchPokemon, fetchOnePokemon, filterPokemon } from '../../redux/actions/pokemonActions'
import { updateSearchState } from '../../redux/actions/UIActions'
import PokemonList from './components/PokemonList'
import BotNav from './components/BotNav'
import LoadMoreButton from './components/LoadMoreButton'


class HomePage extends Component {
  handleScroll = _.throttle(() => {
    const { fetchPokemon, pokemon } = this.props
    const { scrollTop, offsetHeight } = document.documentElement
    if (window.innerHeight + scrollTop === offsetHeight) {
      fetchPokemon(pokemon.length)
    }
  }, 1000)

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
    const { pokemon, fetchPokemon } = this.props
    if(!pokemon[0]) {
      fetchPokemon()
    }
  }

  handleActiveOnePokemon = (event) => {
    const { fetchOnePokemon } = this.props
    fetchOnePokemon(event.currentTarget.id)
  }

  handleGetAllPokemon = () => {
    const { fetchPokemon, pokemon, updateSearchState } = this.props
    fetchPokemon(pokemon.length, true)
  }

  render() {
    const { filteredPokemon, pokemon, apiHasMore } = this.props
    const { handleActiveOnePokemon, handleGetAllPokemon } = this
    return (
      <div className="HomePage">
        <PokemonList filteredPokemon={filteredPokemon}
          pokemon={pokemon}
          handleActiveOnePokemon={handleActiveOnePokemon}
        />
        <LoadMoreButton
          filteredPokemon={filteredPokemon}
          apiHasMore={apiHasMore}
          handleGetAllPokemon={handleGetAllPokemon}
          pokemon={pokemon}
        />
        <BotNav handleGetAllPokemon={handleGetAllPokemon} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { pokemon, filteredPokemon, apiHasMore } = state.pokemon
  return{
    pokemon,
    filteredPokemon,
    apiHasMore,
  }
}

const mapDispatchToProps = {
  fetchPokemon,
  fetchOnePokemon,
  filterPokemon,
  updateSearchState,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
