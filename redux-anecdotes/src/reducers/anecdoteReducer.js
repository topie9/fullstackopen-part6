export const createAnecdote = (data) => {
  console.log(data)
  return {
    type: 'ADD_ANECDOTE',
    data
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const foundAnecdote = state.find(n => n.id === id)
      const addVoteAnecdote = {
        ...foundAnecdote,
        votes: foundAnecdote.votes + 1
      }
      return state.map(a => a.id !== id ? a : addVoteAnecdote)
    case 'ADD_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      break
  }
  return state
}

export default anecdoteReducer