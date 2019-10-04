export default (state = [
    {id:1, value: "wonderwall", owned: false},
    {id:2, value: "hallelujah", owned: false},
    {id:3, value: "jump", owned: true},
  ], action) => {

      if (action.type === 'ADD_MUSIC') {
          const { value } = action
          return [...state, { id: Math.random(), value, owned: false }]
      }
      return state;
  }