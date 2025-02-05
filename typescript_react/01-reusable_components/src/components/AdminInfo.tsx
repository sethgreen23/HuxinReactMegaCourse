import { Info } from "./UserInfo";

export type AInfo = Info & {
	isAdmin: boolean;
}
function AdminInfo({admin}: AInfo) {
	const {id, name, email, isAdmin} = admin;
  return (
	<ul>
		<li>Id: {id}</li>
		<li>Name: {name}</li>
		<li>Email: {email}</li>
		<li>IsAdmin: {isAdmin ? 'Yes' : 'No'}</li>
	</ul>
  )
}

export default AdminInfo
