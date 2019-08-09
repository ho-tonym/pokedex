import {
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING,
} from '../actions/types';

const initialState = {
  sideNav: false,

  searchFocused: false,
  searchString: "",
};

export default function (state = initialState, action) {
  switch(action.type) {
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
