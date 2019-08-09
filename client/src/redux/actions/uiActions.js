import {
  UPDATE_MYPOKE_INPUTS_CHECK_STATE,
  ERRORS,
  COLLAPSE_DIVS,
  TOGGLE_SIDE_NAV,
  UPDATE_SEARCH_CSS,
  UPDATE_SEARCH_STRING,
  UPDATE_MYPOKE_INPUTS,
  UPDATE_SELECTED_OPTION,
  UPDATE_MYPOKE_INPUTS_STATE,
} from './types'


export const updateErrors = (err) => dispatch => {
  dispatch({ type: ERRORS, payload: err })
}

export const updateShowCheckMark = (field, bool) => dispatch => {
  dispatch({
    type: UPDATE_MYPOKE_INPUTS_CHECK_STATE,
    payload: { field, bool },
  })
}

export const toggleDiv = (id) => dispatch => {
  dispatch({ type: COLLAPSE_DIVS, id })
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
    payload: { field, value },
  })
}

export const updateSelectedOption = (option) => dispatch => {
  dispatch({ type: UPDATE_SELECTED_OPTION, payload: option })
}

export const updateMyPokeInputsState = (field, bool) => dispatch => {
  dispatch({
    type: UPDATE_MYPOKE_INPUTS_STATE,
    payload: { field, bool },
  })
}
