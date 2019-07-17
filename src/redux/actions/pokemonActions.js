import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  SUBMIT_POKEMON,
  FETCH_MY_POKEMON,
  FETCH_ONE_POKEMON,
  CREATE_TYPES,
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING
} from './types'

export function fetchMyPokemon() { // retrieve saved pokemon from SQL database.
  return (dispatch) => {
    return fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_MY_POKEMON,
      payload: data,
    }))
  }}

export function submitPokemon(pokemonid) {//save selected pokemon to SQL databse
  return (dispatch) => {
    let pokemonName = pokemonid.replace(/[0-9]/g, '')
    let pokemonId = pokemonid.replace(/\D/g,'');
    return fetch('http://localhost:3001/pokemon', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"pokemonId":pokemonId, "pokemonName": pokemonName})
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
      type: SUBMIT_POKEMON,
      payload: data
    })
  })}
}

export function filterPokemon(searchString = '') {//search bar - searches through state for pokemon that match the name
  return (dispatch, getState) => {
    const displayedPokemons = getState().pokemon.pokemon.filter(pokemon => {
      return pokemon.name.includes(searchString.toLowerCase())
    })
    dispatch({
      type: FILTER_POKEMON,
      payload: displayedPokemons
    })
  }
}

// 949
// 892
export function fetchPokemon() {//collect 20 pokemon from the REST API pokeapi
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_POKEMON,
      payload: data.results
    }))
  }
}
// Additional information on one pokemon at bottom Nav.

export function fetchOnePokemon(pokemon) {
  return (dispatch) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(data => dispatch({
      type: FETCH_ONE_POKEMON,
      payload: data
    }))
  }
}

export function toggleSideNav() {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_SIDE_NAV,
      payload: !(getState().pokemon.sideNav),
    });
  };
}

export function updateSeachCSS(bool) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SEARCH_CSS,
      payload: bool,
    });
  };
}

export function updateSearchState(searchString = '') {
    return (dispatch) => {
  dispatch({
    type: UPDATE_SEARCH_STRING,
    payload: searchString
  })
}}
