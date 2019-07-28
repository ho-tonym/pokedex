import { connect } from 'react-redux'
import React, { Component } from 'react'
import _ from 'lodash'
// import PropTypes from 'prop-types'
import Loader from '../components/general/loader'
import { fetchPokemon, submitPokemon, fetchOnePokemon } from '../redux/actions/pokemonActions'
import PokemonList from '../components/home/_pokemonlist'
import BotNav from './BotNav'

class HomePage extends Component {
  componentWillMount() { // eslint-disable-line react/sort-comp
    window.addEventListener('scroll', this.handleScroll);
    const { pokemon, fetchPokemon } = this.props
    if(!pokemon[0]) {
      // !pokemon[0]
      fetchPokemon()
    }
  }

  handleScroll = _.throttle(() => {
    const { fetchPokemon, pokemon } = this.props
    if (window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight) {
      fetchPokemon(pokemon.length)
    }
  }, 1000)

  handleActiveOnePokemon = (event) => {
    const { fetchOnePokemon } = this.props
    fetchOnePokemon(event.currentTarget.id)
  }

        // {isFetching && <Loader />}
  render() {
    const {
      filteredPokemon,
      pokemon,
      // handleActiveOnePokemon,
      // apiHasMore,
      // fetchPokemon,
      isFetching,
    } = this.props
    return (
      <div className="HomePage">
        <PokemonList filteredPokemon={filteredPokemon}
          pokemon={pokemon}
          handleActiveOnePokemon={this.handleActiveOnePokemon}
        />
        {filteredPokemon.length <= 0 ? "load the rest" : null}
        <BotNav handleGetAllPokemon={this.handleGetAllPokemon} />
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokemon.fetchOnePokemon,
  pokemon: state.pokemon.pokemon,
  filteredPokemon: state.pokemon.filteredPokemon,
  apiHasMore: state.pokemon.apiHasMore,
  isFetching: state.pokemon.isFetching,
})

const mapDispatchToProps = {
  fetchPokemon,
  submitPokemon,
  fetchOnePokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
