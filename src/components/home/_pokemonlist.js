import React from 'react'
import EachPokemon from './eachpokemon'

// Button Click -> dispatch request to PokeApi
// for more information on one pokemon
const PokemonList = ({ searchedPokemonList, allFetchedPokemon, handleActiveOnePokemon }) => {
  const allPokemon = searchedPokemonList.map(eachPokemon => {
    const newUrlArray = eachPokemon.url.split("/")
    const index = newUrlArray[newUrlArray.length - 2]
    return(
      <button id={`${eachPokemon.name}`}
        type="button"
        className="each-pokemon-button"
        key={index}
        onClick={handleActiveOnePokemon}
      >
        <h3 id="each-pokemon-button__index">
          {`#${index}`}
        </h3>
        <EachPokemon
          eachPokemon={eachPokemon}
          index={index}
        >
          {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        </EachPokemon>
        <h3 className="each-pokemon-button__name">{eachPokemon.name}</h3>
      </button>
    )
  })

  return(
    <>
      {allFetchedPokemon.length > 0
        ? <div id="pokemon-list">{allPokemon}</div>
        : (
          <div className="loader">
            <span />
            <span />
            <span />
          </div>
        )
      }
    </>
  )
}

export default PokemonList
