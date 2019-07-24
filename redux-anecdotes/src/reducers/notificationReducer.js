const initialNotification = null

export const setNotification = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}


const notificationReducer = (state = initialNotification, action) => {

  switch (action.type) {
    case 'SET_NOTIFICATION':    
      return action.notification
    default:
      break
  }

  return state
}

export default notificationReducer