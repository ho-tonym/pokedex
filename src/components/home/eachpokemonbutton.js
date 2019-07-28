import React from 'react'
import EachPokemon from './eachpokemon'

const EachPokemonButton = ({ eachPokemon, handleActiveOnePokemon, index }) => (
  <>
    <button id={`${eachPokemon}`}
      type="button"
      className="each-pokemon-button"
      onClick={handleActiveOnePokemon}
    >
      <h3 id="each-pokemon-button__index">{`#${index}`}</h3>
      <EachPokemon
        eachPokemon={eachPokemon}
      >
        {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
      </EachPokemon>
      <h3 className="each-pokemon-button__name">{eachPokemon}</h3>
    </button>
  </>
)

EachPokemonButton.defaultProps = {
  onClick: () => null,
  index: null,
};

export default EachPokemonButton
