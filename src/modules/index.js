import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import recipes from './home'

export default combineReducers({
  routing: routerReducer,
  recipes: recipes
})