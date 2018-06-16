import {
  INPUT_CHANGE,
  INPUT_CLEAR,
  RECIPES_FETCH,
  RECIPES_FETCH_SUCCESS,
  RECIPES_FETCH_ERROR
} from './actions';

import getRecipes from '../api/recipes'

const initialState = {
  all: [],
  status: {
    loading: false,
    success: false,
    error: false
  },
  message: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        search: action.payload
      }
    case INPUT_CLEAR:
      return {
        ...state,
        search: null,
        all: [],
        status: {
          loading: false,
          success:false, 
          error: false
        }
      }
      case RECIPES_FETCH:
      return {
        ...state,
        status: {
          loading: true,
          success:false, 
          error: false
        },
      }
      case RECIPES_FETCH_SUCCESS:
      return {
        ...state,
        all: action.payload,
        status: {
          loading: false,
          success: true,
          error: false
        }
      }
      case RECIPES_FETCH_ERROR:
      return {
        ...state,
        status: {
          loading: false,
          success: false,
          error: true
        },
        message: action.payload
      }
    default:
      return state
  }
}

export const onInputChange = (_payload) => {
  return dispatch => {
    if(_payload === '') {
      dispatch({
        type: INPUT_CLEAR
      })
    } else { 
      dispatch({
        type: INPUT_CHANGE,
        payload: _payload
      })
      dispatch(fetchRecipes(_payload))
    }
  }
}
export const fetchRecipes = (_payload) => {
  return dispatch => {
    dispatch({
      type: RECIPES_FETCH,
      payload: _payload
    })
    getRecipes(_payload)
    .then(response => {
      dispatch({
        type: RECIPES_FETCH_SUCCESS,
        payload: response.data.results.slice(0,19)
      })
    })
    .catch(error => {
      dispatch({
        type: RECIPES_FETCH_ERROR,
        payload: 'We cant load recipes just now. Try Allow Control Origin Chrome extension'
      })
    })

  }
}