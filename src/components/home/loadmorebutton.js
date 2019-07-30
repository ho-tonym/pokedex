import React from 'react'

const LoadMoreButton = ({ filteredPokemon, apiHasMore, handleGetAllPokemon, pokemon }) => (
  <>
    {filteredPokemon.length <= 0 && pokemon.length > 0 && apiHasMore
      ? (
        <button
          className="rounded-button blue-button larger-button"
          type="submit"
          onClick={handleGetAllPokemon}
        >
          Load All Pokemon
        </button>
      )
      : null}
  </>
)

export default LoadMoreButton
