const deleteWord = (state = [], action) => {
  switch (action.type) {
    case 'DELETE_WORD':
      return [...state].filter(function (key) {
        if (key.id !== action.id) {
          return key
        }
      })



    default:
      return state
  }
}

export default deleteWord
