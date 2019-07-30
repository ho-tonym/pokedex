import { connect } from 'react-redux'
import React, { Component } from 'react'
import _ from 'lodash'
// import PropTypes from 'prop-types'
import { fetchPokemon, fetchOnePokemon } from '../redux/actions/pokemonActions'
import PokemonList from '../components/home/pokemonlist'
import BotNav from './BotNav'
import LoadMoreButton from '../components/home/loadmorebutton'

class HomePage extends Component {
  componentWillMount() { // eslint-disable-line react/sort-comp
    window.addEventListener('scroll', this.handleScroll);
    const { pokemon, fetchPokemon } = this.props
    if(!pokemon[0]) {
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

  handleGetAllPokemon = () => {
    const { fetchPokemon, pokemon } = this.props
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
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
