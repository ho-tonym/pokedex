import {FILTER_POKEMON, FETCH_POKEMON, SUBMIT_POKEMON, FETCH_MY_POKEMON, FETCH_ONE_POKEMON} from '../actions/types'

const initialState = {
  pokemon: [],
  filteredPokemon: [],
  currentSubmittedPokemon: "",
  myPokemon: [],
  fetchOnePokemon: {},
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_POKEMON:
        // console.log(action.payload);
        // filteredPokemon: action.payload.slice(0,20)
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

    default:
      return state;
  }
}
//reducers evaluate actions that are commmited
//fetch posts, creating new posts
//types = constants
