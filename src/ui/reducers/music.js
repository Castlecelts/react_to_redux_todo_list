import { ADD_MUSIC, CHECK_MUSIC_LIST_ITEM } from '../action-names';
import update from 'immutability-helper';

export default (state = [
    {id:Math.random().toString(36).substring(7), value: "wonderwall", owned: false},
    {id:Math.random().toString(36).substring(7), value: "hallelujah", owned: false},
    {id:Math.random().toString(36).substring(7), value: "jump", owned: true},
  ], action) => {

      if (action.type === ADD_MUSIC) {
          const { value } = action
          return [...state, { id: Math.random().toString(36).substring(7), value, owned: false }]
      }
      if (action.type === CHECK_MUSIC_LIST_ITEM){
        const { value } = action
        console.log("selected value:", value)
  
        const selectedItem = state.findIndex( x => x.id === value)
        console.log("selected Item:", selectedItem)
        return update(state, {[selectedItem]: {$merge: {owned: !state[selectedItem].owned} }})
        // return state
      }
      return state;
  }