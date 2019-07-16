import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  SUBMIT_POKEMON,
  FETCH_MY_POKEMON,
  FETCH_ONE_POKEMON,
  CREATE_TYPES,
  UPDATE_SIDE_NAV,
} from '../actions/types'

const initialState = {
  pokemon: [],
  filteredPokemon: [],
  currentSubmittedPokemon: "",
  myPokemon: [],
  fetchOnePokemon: {},
  types: {},
  sideNav: {}

}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        filteredPokemon: action.payload
      }

    case FETCH_ONE_POKEMON:
    console.log(action.payload);
      return {
        ...state,
        fetchOnePokemon: action.payload
      }

    case FILTER_POKEMON:
      return {
        ...state,
        filteredPokemon: action.payload
      }

    case SUBMIT_POKEMON:
      return{
        ...state,
      }

    case FETCH_MY_POKEMON:
      console.log(action.payload)
        return {
          ...state,
          myPokemon: action.payload
        }

    case CREATE_TYPES:
      console.log(action.payload)
        return {
          ...state,
          types: action.payload
        }
    case UPDATE_SIDE_NAV:
      console.log(action.payload)
        return {
          ...state,
          sideNav: action.payload
        }

    default:
      return state;
  }
}
