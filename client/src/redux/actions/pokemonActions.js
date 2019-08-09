import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  UPDATE_MY_POKEMON,
  FETCH_ONE_POKEMON,
  NO_MORE_POKEMON,
  FETCHING,
  SEND_TO_BACKEND,
  GET_FROM_BACKEND,
  ERRORS,
} from './types'

export const submitPokemon = () => (dispatch, getState) => {
  const newCP = parseInt(getState().pokemon.myPokeInputs.cp, 10)
  dispatch({ type: FETCHING, payload: true });
  try {
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
  } catch {
    dispatch({ type: FETCHING, payload: false })
  }
}

export const sendToBackend = (key) => (dispatch, getState) => {
  if (getState().pokemon.myPokemon.length <= 0) {
    (dispatch({ type: ERRORS, payload: "No Pokemon to save" }))
    setTimeout(() => dispatch({ type: ERRORS, payload: "" }), 3000)
    return
  }
  dispatch({ type: FETCHING, payload: true })
  fetch('/api/mypokemon/', {
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
    .catch(() => {
      dispatch({ type: ERRORS, payload: "Couldn't save your pokemon at this time" })
      setTimeout(() => dispatch({ type: ERRORS, payload: "" }), 3000)
    });
}

export const getFromBackend = () => async (dispatch, getState) => {
  const { id } = getState().pokemon.myPokeInputs
  if(id.length <= 0) {
    dispatch({ type: ERRORS, payload: "Type in a valid code" })
    setTimeout(() => dispatch({ type: ERRORS, payload: "" }), 3000)
    return
  }
  dispatch({ type: FETCHING, payload: true })
  try {
    const response = await fetch(`/api/mypokemon/${id}`)
    const json = await response.json()
    dispatch({ type: GET_FROM_BACKEND, payload: json.myPokemon })
  } catch(err) {
    dispatch({ type: ERRORS, payload: "Invalid code" })
    dispatch({ type: FETCHING, payload: false })
    setTimeout(() => dispatch({ type: ERRORS, payload: "" }), 3000)
  }
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
  try {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${amtToFetch}/&offset=${numfetchedPokemon}`)
      .then(response => response.json())
      .then(data => dispatch({
        type: FETCH_POKEMON,
        payload: data.results,
      }))
  } catch {
    dispatch({ type: FETCHING, payload: false })
  }
}

export const fetchOnePokemon = pokemon => (dispatch, getState) => {
  if (getState().pokemon.onePokemonData.name !== pokemon) {
    dispatch({ type: FETCHING, payload: true });
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data => dispatch({
          type: FETCH_ONE_POKEMON,
          payload: data,
        }))
    } catch(err) {
      dispatch({ type: ERRORS, payload: "Unable to get more information on that pokemon" })
      dispatch({ type: FETCHING, payload: false })
      setTimeout(() => dispatch({ type: ERRORS, payload: "" }), 3000)
    }
  }
}
