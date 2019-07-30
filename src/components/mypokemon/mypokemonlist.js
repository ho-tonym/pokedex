import React from 'react'
import uuid from 'uuid'
import EachMyPokemon from './eachmypokemon'

const MyPokemonList = ({ myPokemon }) => (
  <>
    <div className="my-pokemon-list pad-top-20">
      {myPokemon.map(eachPokemon => (
        <EachMyPokemon
          key={uuid.v4()}
          eachPokemon={eachPokemon.data.name}
          cp={eachPokemon.cp}
          id={eachPokemon.data.id}
          types={
            eachPokemon.data.types.map(e => e.type.name)
          }
        />
      ))}
    </div>
  </>
)

export default MyPokemonList
