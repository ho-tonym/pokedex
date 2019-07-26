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
  NO_MORE_POKEMON,
  FETCHING,
  UPDATE_MYPOKE_INPUTS,
} from '../actions/types';

const initialState = {
  pokemon: [],
  filteredPokemon: [],
  myPokemon: [{
    name: "charizard",
    cp: 1245,
  },
  {
    name: "pikachu",
    cp: 2432,
  },
  ],
  fetchOnePokemon: {},
  types: {},
  sideNav: false,
  searchFocused: false,
  searchString: "",
  apiHasMore: true,
  isFetching: false,
  myPokeInputs: { name: "", cp: "" },
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon.concat(action.payload),
        filteredPokemon: state.filteredPokemon.concat(action.payload),
      };

    case FETCH_ONE_POKEMON:
      return {
        ...state,
        fetchOnePokemon: action.payload,
        isFetching: false,
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
    case UPDATE_MYPOKE_INPUTS:
    const newFields = {...state.myPokeInputs};
    newFields[action.payload.field] = action.payload.value;
      return {
        ...state,
        myPokeInputs: newFields,
      };
    default:
      return state;
  }
}
