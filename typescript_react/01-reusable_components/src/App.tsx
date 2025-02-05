import AdminInfo, { type AInfo } from "./components/AdminInfo";
import UserInfo, { type Info } from "./components/UserInfo";

function App() {
  const user: Info = {
	id: 1,
	name: "Chaith Dridi",
	email: "chaith@alx",
  };
  const admin: AInfo = {
	id: 2,
	name: "Maria Dridi",
	email: "maria@alx",
	isAdmin: true
  }
  return <div>
	<UserInfo user={user} />
	<AdminInfo admin={admin} />
  </div>;
}

export default App;
