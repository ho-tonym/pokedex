import React from 'react'
import EachPokemon from '../home/eachpokemon'

const EachMyPokemon = ({ eachPokemon, classname, cp }) => (
  <>
    <button id={eachPokemon}
      type="button"
      className="each-my-pokemon"
    >
      <h3 id="each-pokemon-button__index">{cp}</h3>
      <EachPokemon
        eachPokemon={eachPokemon}
      >
        {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cp}.png`}
      </EachPokemon>
      <h3 className="each-pokemon-button__name">{eachPokemon}</h3>
    </button>
  </>
)

EachMyPokemon.defaultProps = {
  classname: "",
};

export default EachMyPokemon
