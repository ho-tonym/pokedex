import React from 'react';
import EachPokemon from './eachpokemon'

const PokemonList = ({searchedPokemonList, allFetchedPokemon, handleClick, handleActiveOnePokemon}) => {
    let allPokemon = searchedPokemonList.map(eachPokemon => {
    let newUrlArray = eachPokemon.url.split("/")
    let index = newUrlArray[newUrlArray.length - 2]
    return(
      <button id={`${eachPokemon.name}`} className="each_pokemon_button" key={index} onClick={handleActiveOnePokemon}>
        <h3 id="pokeIndex">#{index}</h3>
        <EachPokemon eachPokemon={eachPokemon} index={index}>
          {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}</EachPokemon>
        <h3 className="nametag">{eachPokemon.name}</h3>
      </button>
    )
  })

  return(
    <React.Fragment>
    {allFetchedPokemon.length > 0
      ? <div id="pokemon_list">{allPokemon}</div>
      : <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
    </React.Fragment>
  )
}

export default PokemonList
