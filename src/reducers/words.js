const words = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]

    case 'DELETE_WORD':
      return [...state].filter(function(key) {
          if(key.id !== parseInt(action.id,10)){
            return key
          }
        }
    )
    default:
      return state
  }
}



export default words
