import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  SUBMIT_POKEMON,
  FETCH_MY_POKEMON,
  FETCH_ONE_POKEMON,
  // CREATE_TYPES,
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING,
  NO_MORE_POKEMON,
  FETCHING,
  UPDATE_MYPOKE_INPUTS,
} from './types'

// retrieve saved pokemon from SQL database
export const fetchMyPokemon = () => dispatch => fetch('http://localhost:5000/api/mypokemon/')
  .then(response => response.json())
  .then(data => dispatch({
    type: FETCH_MY_POKEMON,
    payload: data,
  }))

// save selected pokemon to SQL databse
export const submitPokemon = pokemonid => dispatch => {
  const pokemonName = pokemonid.replace(/[0-9]/g, '')
  const pokemonId = pokemonid.replace(/\D/g, '');
  return fetch('http://localhost:3001/pokemon', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pokemonId, pokemonName }),
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: SUBMIT_POKEMON,
        payload: data,
      })
    })
}

// search bar - searches through state for pokemon that match the name
export const filterPokemon = (searchString = '') => (dispatch, getState) => {
  const displayedPokemons = getState().pokemon.pokemon.filter(pokemon => (
    pokemon.name.includes(searchString.toLowerCase())
  ))
  dispatch({
    type: FILTER_POKEMON,
    payload: displayedPokemons,
  })
}

// 949
// 892
// collect 20 pokemon from the REST API pokeapi
export const fetchPokemon = (fetchedPokemon = 0, number = 20) => dispatch => {
  if(fetchedPokemon >= 892) {
    dispatch({ type: NO_MORE_POKEMON, payload: false })
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${number}/&offset=${fetchedPokemon}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_POKEMON,
      payload: data.results,
    }))
}

export const fetchOnePokemon = pokemon => dispatch => {
  dispatch({ type: FETCHING, payload: true });
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_ONE_POKEMON,
      payload: data,
    }))
}

export const toggleSideNav = () => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_SIDE_NAV,
    payload: !(getState().pokemon.sideNav),
  });
}

export const updateSeachCSS = bool => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_CSS,
    payload: bool,
  });
}

export const updateSearchState = (searchString = '') => dispatch => {
  dispatch({
    type: UPDATE_SEARCH_STRING,
    payload: searchString,
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
