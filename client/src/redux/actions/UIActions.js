import {
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING,
  UPDATE_SELECTED_OPTION,
  COLLAPSE_DIVS,
} from './types'

export const toggleSideNav = () => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_SIDE_NAV,
    payload: !(getState().UI.sideNav),
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

export const updateSelectedOption = (option) => dispatch => {
  dispatch({
    type: UPDATE_SELECTED_OPTION,
    payload: option,
  })
}

export const toggleDiv = (id) => dispatch => {
  dispatch({
    type: COLLAPSE_DIVS,
    id,
  })
}
