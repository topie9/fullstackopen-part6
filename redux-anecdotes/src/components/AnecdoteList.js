import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes

  const vote = (id) => {
    props.store.dispatch(voteAnecdote(id))
    const anecdote = anecdotes.find(n => id === n.id)
    props.store.dispatch(setNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => props.store.dispatch(setNotification(null)), 5000)
  }

  return (
    <div>
      {anecdotes.sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList