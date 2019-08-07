import React from 'react'

const EachPokemon = ({ name, children }) => (
  <>
    <img src={children} alt={name} />
  </>
)

EachPokemon.defaultProps = {
  name: "pikachu",
};

export default EachPokemon
