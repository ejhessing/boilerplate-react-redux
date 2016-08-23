let nextWordId = 0
let nextImageId = 0
let deleteId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addImage = (image) => {
  return {
    type: 'ADD_IMAGE',
    id: nextImageId++,
    image
  }
}

export const deleteWord = (id) => {
  return {
    type: 'DELETE_WORD',
    id
  }
}
