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
} from '../actions/types';

const initialState = {
  pokemon: [],
  pokemonNames: [],
  filteredPokemon: [],
  myPokemon: [],
  onePokemonData: {},

  apiHasMore: true,
  isFetching: false,

  id: "",
  errors: "",
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.concat(action.payload),
        filteredPokemon: state.filteredPokemon.concat(action.payload),
        isFetching: false,
      };
    case FETCH_ONE_POKEMON:
      return {
        ...state,
        onePokemonData: action.payload,
        isFetching: false,
      };

    case FILTER_POKEMON:
      return {
        ...state,
        filteredPokemon: action.payload,
      };

    case UPDATE_MY_POKEMON:
      return {
        ...state,
        myPokemon: state.myPokemon.concat(action.payload),
        isFetching: false,
      };
    case GET_FROM_BACKEND:
      return {
        ...state,
        myPokemon: action.payload,
        isFetching: false,
      };
    case NO_MORE_POKEMON:
      return {
        ...state,
        apiHasMore: action.payload,
      };
    case FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SEND_TO_BACKEND:
      return {
        ...state,
        id: action.payload,
        isFetching: false,
      };
    case ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
