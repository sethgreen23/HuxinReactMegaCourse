export type Info = {
	id: number;
	name: string;
	email: string;
}

function UserInfo({user}: Info) {
  const {id, name, email} = user
  return (
	<ul>
		<li>Id: {id}</li>
		<li>Name: {name}</li>
		<li>Email: {email}</li>
	</ul>
  )
}

export default UserInfo
