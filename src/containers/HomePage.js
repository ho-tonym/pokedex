import { connect } from 'react-redux'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Loader from '../components/general/loader'
import { fetchPokemon, submitPokemon, fetchOnePokemon } from '../redux/actions/pokemonActions'
import PokemonList from '../components/home/_pokemonlist'
import Pokemon from './Pokemon'

class HomePage extends Component {

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
    const { allFetchedPokemon, fetchPokemon } = this.props
    if(this.isObjectEmpty(allFetchedPokemon)) {
      fetchPokemon()
    }
  }

  handleScroll = () => {
     if (
       window.innerHeight + document.documentElement.scrollTop
       === document.documentElement.offsetHeight
     ) {
       this.props.fetchPokemon(this.props.allFetchedPokemon.length)
     }
 }

  isObjectEmpty = (Obj) => {
    for(let key in Obj) {
      if(Obj.hasOwnProperty(key))
        return false
    }
    return true
  }

  handleActiveOnePokemon = (event) => {
    this.props.fetchOnePokemon(event.currentTarget.id)
  }

  render() {
    const Icon = ({ className = 'icon-large', onClick }) => (
      <span className={`icon-hover ${className}`} onClick={onClick} />
    );

    const { searchedPokemonList, allFetchedPokemon, handleActiveOnePokemon, apiHasMore, fetchPokemon } = this.props
    return (
      <div className="HomePage">
        <Icon />
          <PokemonList searchedPokemonList={searchedPokemonList}
            allFetchedPokemon={allFetchedPokemon}
            handleActiveOnePokemon={this.handleActiveOnePokemon}
          />
        <Pokemon />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pokeData: state.pokemon.fetchOnePokemon,
  allFetchedPokemon: state.pokemon.pokemon,
  searchedPokemonList: state.pokemon.filteredPokemon,
  apiHasMore: state.pokemon.apiHasMore,
})

const mapDispatchToProps = {
  fetchPokemon,
  submitPokemon,
  fetchOnePokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
