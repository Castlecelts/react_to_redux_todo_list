/* { todoItems: {
  1: { completed: false},
  2: { completed: true},
}}
 action: { type: 'ACTION_TYPE', value: 'sdufhuasdf' }
*/
export default (state = [], action) => {
  //check the action type
 // if action type is 'ADD_TODO'
 // add a new item to the list 
 // return the new state
 
 if (action.type === 'ADD_TODO') {
   const { value } = action
   
    // {id: Math.random(), value: listItem, completed: false}] }
    return [...state, { id: Math.random(), value, completed: false }]
 }
}