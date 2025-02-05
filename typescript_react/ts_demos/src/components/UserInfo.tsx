import {info} from '../types'

function UserInfo({id, name, email}: info) {
  return (
	<div>
	  <h2>{id}</h2>
	  <h2>{name}</h2>
	  <h2>{email}</h2>
	</div>
  )
}

export default UserInfo;