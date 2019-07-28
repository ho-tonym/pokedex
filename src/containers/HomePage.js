import { connect } from 'react-redux'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Loader from '../components/general/loader'
import { fetchPokemon, submitPokemon, fetchOnePokemon } from '../redux/actions/pokemonActions'
import PokemonList from '../components/home/_pokemonlist'
import BotNav from './BotNav'

class HomePage extends Component {
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
    const { pokemon, fetchPokemon } = this.props
    if(!pokemon[0]) {
      fetchPokemon()
    }
  }

  handleScroll = () => {
    const { fetchPokemon, pokemon } = this.props
    if (window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight) {
      fetchPokemon(pokemon.length)
    }
  }

  handleActiveOnePokemon = (event) => {
    const { fetchOnePokemon } = this.props
    fetchOnePokemon(event.currentTarget.id)
  }

  handleGetAllPokemon = () => {
    const { fetchPokemon, pokemon } = this.props
    fetchPokemon(pokemon.length, true)
  }

  render() {
    const {
      searchedPokemonList,
      pokemon,
      // handleActiveOnePokemon,
      // apiHasMore,
      // fetchPokemon,
      isFetching,
    } = this.props
    return (
      <div className="HomePage">
        <div className={`load-bar ${isFetching ? "w-35" : "w-100"}`} />
        <PokemonList searchedPokemonList={searchedPokemonList}
          pokemon={pokemon}
          handleActiveOnePokemon={this.handleActiveOnePokemon}
        />
        <BotNav handleGetAllPokemon={this.handleGetAllPokemon} />
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokemon.fetchOnePokemon,
  pokemon: state.pokemon.pokemon,
  searchedPokemonList: state.pokemon.filteredPokemon,
  apiHasMore: state.pokemon.apiHasMore,
  isFetching: state.pokemon.isFetching,
})

const mapDispatchToProps = {
  fetchPokemon,
  submitPokemon,
  fetchOnePokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
