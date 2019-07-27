const initialNotification = null

export const setNotification = (notification, time) => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
    setTimeout(() => dispatch(clearNotification(time)), 1000 * time)
  }
}

export const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_NOTIFICATION',
      notification: null
    })
  }
}

const notificationReducer = (state = initialNotification, action) => {
  console.log('INSIDE REDUCER:', state, action)
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'CLEAR_NOTIFICATION':
      return action.notification
    default:
      break
  }

  return state
}

export default notificationReducer