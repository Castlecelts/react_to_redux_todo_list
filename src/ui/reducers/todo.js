/* { todoItems: {
  1: { completed: false},
  2: { completed: true},
}}
 action: { type: 'ACTION_TYPE', value: 'sdufhuasdf' }
*/
import { ADD_TODO, CHECK_LIST_ITEM} from '../action-names';
import update from 'immutability-helper';

export default (state = [
  {id:Math.random().toString(36).substring(7), value: "buy shopping", completed: false},
  {id:Math.random().toString(36).substring(7), value: "second", completed: false},
  {id:Math.random().toString(36).substring(7), value: "phone home", completed: true},
], action) => {

    // change data structure to {} instead of []

    if (action.type === ADD_TODO) {
        const { value } = action
        return [...state, { id: Math.random().toString(36).substring(7), value, completed: false }]
    }

    if (action.type === CHECK_LIST_ITEM){
      const { value } = action
      console.log("selected value:", value)

      const selectedItem = state.findIndex( x => x.id === value)
      console.log("selected Item:", selectedItem)
      return update(state, {[selectedItem]: {$merge: {completed: !state[selectedItem].completed} }})
      // return state
    }

    return state;

}