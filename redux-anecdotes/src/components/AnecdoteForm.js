import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  
  const addAnecdote = (event) => {
    event.preventDefault()
    const text = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(text)
    props.setNotification(`you added anecdote '${text}'`)
    setTimeout(() => props.setNotification(null), 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}


const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)