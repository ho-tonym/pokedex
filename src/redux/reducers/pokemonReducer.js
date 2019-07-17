import {
  FILTER_POKEMON,
  FETCH_POKEMON,
  SUBMIT_POKEMON,
  FETCH_MY_POKEMON,
  FETCH_ONE_POKEMON,
  CREATE_TYPES,
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING,
} from '../actions/types';

const initialState = {
  pokemon: [],
  filteredPokemon: [],
  currentSubmittedPokemon: "",
  myPokemon: [],
  fetchOnePokemon: {},
  types: {},
  sideNav: false,
  searchFocused: false,
  searchString: "",
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        filteredPokemon: action.payload,
      };

    case FETCH_ONE_POKEMON:
      return {
        ...state,
        fetchOnePokemon: action.payload,
      };

    case FILTER_POKEMON:
      return {
        ...state,
        filteredPokemon: action.payload,
      };

    case SUBMIT_POKEMON:
      return{
        ...state,
      };

    case FETCH_MY_POKEMON:
      return {
        ...state,
        myPokemon: action.payload,
      };

    case CREATE_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        sideNav: action.payload,
      };
    case UPDATE_SEARCH_CSS:
      return {
        ...state,
        searchFocused: action.payload,
      };
    case UPDATE_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };

    default:
      return state;
  }
}
