import React from 'react';
import EachPokemon from './eachpokemon';

// Button Click -> dispatch request to PokeApi
// for more information on one pokemon
const PokemonList = ({ searchedPokemonList, allFetchedPokemon, handleActiveOnePokemon }) => {
  const allPokemon = searchedPokemonList.map(eachPokemon => {
    const newUrlArray = eachPokemon.url.split("/");
    const index = newUrlArray[newUrlArray.length - 2];
    return(
      <button id={`${eachPokemon.name}`}
        type="button"
        className="each_pokemon_button"
        key={index}
        onClick={handleActiveOnePokemon}
      >
        <h3 id="pokeIndex">
          #
          {index}
        </h3>
        <EachPokemon
          eachPokemon={eachPokemon}
          index={index}
        >
          {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        </EachPokemon>
        <h3 className="nametag">{eachPokemon.name}</h3>
      </button>
    );
  });

  return(
    <>
      {allFetchedPokemon.length > 0
        ? <div id="pokemon_list">{allPokemon}</div>
        : (
          <div className="loader">
            <span />
            <span />
            <span />
          </div>
        )
      }
    </>
  );
};

export default PokemonList;
