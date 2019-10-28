import { ADD_MUSIC } from '../action-names';

export default (state = [
    {id:Math.random().toString(36).substring(7), value: "wonderwall", owned: false},
    {id:Math.random().toString(36).substring(7), value: "hallelujah", owned: false},
    {id:Math.random().toString(36).substring(7), value: "jump", owned: true},
  ], action) => {

      if (action.type === ADD_MUSIC) {
          const { value } = action
          return [...state, { id: Math.random().toString(36).substring(7), value, owned: false }]
      }
      return state;
  }