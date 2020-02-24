import {
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING,
  UPDATE_SELECTED_OPTION,
  COLLAPSE_DIVS,
} from '../actions/types';

const initialState = {
  sideNav: false,
  searchString: "",
  searchFocused: false,
  selectedOption: "add-pokemon",
  collapseDivs: { "collapse-1": false, "collapse-2": false, "collapse-3": false },
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
    case UPDATE_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    case COLLAPSE_DIVS:
      return {
        ...state,
        collapseDivs: {
          ...state.collapseDivs, [action.id]: !state.collapseDivs[action.id] },
      };
    default:
      return state;
  }
}
