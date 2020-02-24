import React from 'react'
import uuid from 'uuid'
import EachMyPokemon from './EachMyPokemon'

const MyPokemonList = ({ myPokemon }) => (
  <>
    <div className="my-pokemon-list pad-top-20">
      {myPokemon.map(eachPokemon => (
        <EachMyPokemon
          key={uuid.v4()}
          eachPokemon={eachPokemon.name}
          cp={eachPokemon.cp}
          id={eachPokemon.id}
          types={eachPokemon.types.map(e => e.type.name)
          }
        />
      ))}
    </div>
  </>
)

EachMyPokemon.defaultProps = {
  eachPokemon: {
    cp: 0,
    id: 0,
    name: "PokemonName",
    types: [
      {
        type: {
          name: "fighting",
        },
      },
      {
        type: {
          name: "fire",
        },
      },
    ],
  },
};

export default MyPokemonList
