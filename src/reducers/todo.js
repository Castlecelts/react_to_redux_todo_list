/* { todoItems: {
  1: { completed: false},
  2: { completed: true},
}}
 action: { type: 'ACTION_TYPE', value: 'sdufhuasdf' }
*/
import { ADD_TODO } from '../action-names';

export default (state = [
  {id:1, value: "buy shopping", completed: false},
  {id:2, value: "second", completed: false},
  {id:3, value: "phone home", completed: true},
], action) => {
    //check the action type
    // if action type is 'ADD_TODO' - DONE
    // add a new item to the list -DONE
    // return the new state -DONE

    // change data structure to {} instead of []

    if (action.type === ADD_TODO) {
        const { value } = action
        return [...state, { id: Math.random(), value, completed: false }]
    }
    return state;

}