import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  return (
	<div>
	  {(loggedIn && !isAdmin) && <p>Welcome User</p>}
	  {(loggedIn && isAdmin) && <p>Welcome Admin</p>}
	</div>
  )
}

export default UserStatus
