import React from 'react'
import uuid from 'uuid'
import Loader from '../general/loader'
import EachPokemonButton from './eachpokemonbutton'

const PokemonList = ({ filteredPokemon, pokemon, handleActiveOnePokemon }) => {
  const allPokemon = filteredPokemon.map(eachPokemon => {
    const newUrlArray = eachPokemon.url.split("/")
    const index = newUrlArray[newUrlArray.length - 2]
    return(
      <EachPokemonButton
        key={uuid.v4()}
        eachPokemon={eachPokemon.name}
        handleActiveOnePokemon={handleActiveOnePokemon}
        index={index}
      />
    )
  })

  return(
    <>
      {pokemon.length > 0
        ? <div id="pokemon-list">{allPokemon}</div>
        : <Loader />
       }
    </>
  )
}

export default PokemonList
