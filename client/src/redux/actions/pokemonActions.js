import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  UPDATE_MY_POKEMON,
  FETCH_ONE_POKEMON,
  NO_MORE_POKEMON,
  GET_FROM_BACKEND,
  SEND_TO_BACKEND,
  FETCHING,
  UPDATE_MYPOKE_INPUTS,
  UPDATE_MYPOKE_INPUTS_STATE,
  UPDATE_MYPOKE_INPUTS_CHECK_STATE,
} from './types'

export const submitPokemon = () => (dispatch, getState) => {
  const newCP = parseInt(getState().pokemon.myPokeInputs.cp, 10)

  dispatch({ type: FETCHING, payload: true });
  fetch(`https://pokeapi.co/api/v2/pokemon/${getState().pokemon.myPokeInputs.name}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: UPDATE_MY_POKEMON,
      payload: {
        cp: newCP,
        name: data.name,
        id: data.id,
        types: data.types,
      },
    }))
}

export const sendToBackend = (key) => (dispatch, getState) => fetch('/api/mypokemon/', {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    myPokemon: getState().pokemon.myPokemon,
    key,
  }),
})
  .then(response => response.json())
  .then(() => {
    dispatch({ type: SEND_TO_BACKEND, payload: key })
  })

export const getFromBackend = () => async (dispatch, getState) => {
  const response = await fetch(`/api/mypokemon/${getState().pokemon.myPokeInputs.id}`)
  const json = await response.json()

  dispatch({
    type: GET_FROM_BACKEND,
    payload: json.myPokemon,
  })
}

export const filterPokemon = (searchString = '') => (dispatch, getState) => {
  const displayedPokemons = getState().pokemon.pokemon.filter(pokemon => (
    pokemon.name.includes(searchString.toLowerCase())
  ))
  dispatch({
    type: FILTER_POKEMON,
    payload: displayedPokemons,
  })
}

// 857- magic number - before the pokemon from PokeAPI don't have pictures
// collect 20 pokemon from the REST API pokeapi
export const fetchPokemon = (numfetchedPokemon = 0, fetchAll = false) => (dispatch) => {
  if(numfetchedPokemon >= 897) { return (dispatch({ type: NO_MORE_POKEMON, payload: false })) }

  let amtToFetch = 20
  if (fetchAll) {
    amtToFetch = 897 - numfetchedPokemon
    dispatch({ type: FETCHING, payload: true })
    dispatch({ type: NO_MORE_POKEMON, payload: false })
  }

  return(
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${amtToFetch}/&offset=${numfetchedPokemon}`)
      .then(response => response.json())
      .then(data => dispatch({
        type: FETCH_POKEMON,
        payload: data.results,
      }))
  )
}

export const fetchOnePokemon = pokemon => (dispatch, getState) => {
  if (getState().pokemon.onePokemonData.name !== pokemon) {
    dispatch({ type: FETCHING, payload: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => dispatch({
        type: FETCH_ONE_POKEMON,
        payload: data,
      }))
  }
}


export const updateMyPokeInputsState = (field, bool) => dispatch => {
  dispatch({
    type: UPDATE_MYPOKE_INPUTS_STATE,
    payload: { field, bool },
  })
}

export const updateMyPokeInputs = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_MYPOKE_INPUTS,
    payload: {
      field,
      value,
    },
  })
}

export const updateShowCheckMark = (field, bool) => dispatch => {
  dispatch({
    type: UPDATE_MYPOKE_INPUTS_CHECK_STATE,
    payload: { field, bool },
  })
}
