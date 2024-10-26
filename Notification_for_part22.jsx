const Notification = ({ message, type}) => {
    if (message === null ) {
        return null
    }
    const notificationStyle = {
        color : type === 'success' ? 'green' : 'red',
        background: 'lightgrey',
        borderColor: type === 'success' ? 'green' : 'red'
    }

    return (
      <div style={notificationStyle} className={type}>
      {message}
      </div>
      )
}

export default Notification;