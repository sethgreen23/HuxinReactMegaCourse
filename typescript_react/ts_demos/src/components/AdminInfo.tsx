import { AdminInfoList } from "../types"
type AdminInfoProps = {
	admin: AdminInfoList
}
function AdminInfo({admin}: AdminInfoProps) {
	const {id, name, email, isAdmin, permissions} = admin
  return (
	<div>
	  <h2>{id}</h2> <h2>{name}</h2> <h2>{email}</h2> <h2>{isAdmin}</h2> <h2>{permissions.join(", ")}</h2>
	</div>
  )
}

export default AdminInfo
