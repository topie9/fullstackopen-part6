import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const vote = (id, anecdote) => {
    const addedVoteAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    props.voteAnecdote(id, addedVoteAnecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {props.filteredAnecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

const filterAnecdotes = ({ anecdotes, filter }) => {
  return (filter === ''
    ? anecdotes
    : anecdotes.filter(n => n.content.toLowerCase().includes(filter.toLowerCase()))
  )
}

const mapStateToProps = (state) => {
  return {
    filteredAnecdotes: filterAnecdotes(state),
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)