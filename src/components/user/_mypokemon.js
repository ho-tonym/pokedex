import React from 'react'
// Deprecated- src/components/user folder components

const MyPokemon = ({ myPokemon, handleSubmitForm }) =>
  <div className="mypokemon">
    <h1>These are my Pokemon!</h1>
      {
        (myPokemon).length >= 1
        ? <ul>{myPokemon.map(x =>
                <h3 key={x.id}>{x.pokemon_name}</h3>
              )}</ul>
        : <p>No pokemon have been added!</p>
      }
  </div>

export default MyPokemon
