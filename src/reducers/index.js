import { combineReducers } from 'redux'
import todos from './todo'
import musics from './music'

export default combineReducers({
  todos,
  musics
})