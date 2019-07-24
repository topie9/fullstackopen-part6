export const filterChange  = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

const filterReducer = (state = '', action) => {

  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      break
  }

  return state
}

export default filterReducer 