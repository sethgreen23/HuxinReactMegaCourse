import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import ChildrenProp from "./components/ChildrenProp";
import User from "./components/User";
import UserInfo from "./components/UserInfo";

function App() {
	const admin = {
		id: 1,
		name: "alx",
		email: "alx@alx",
		isAdmin: true,
		permissions: ["read", "write"]
	}
  return (
    <div>
      <User name="alx" age={20} isStudent={true} />
	  <ChildrenProp><h1>Hello world</h1></ChildrenProp>
	  <Button label="Click me" onClick={() => alert("Hello world")} disabled={false} />
		<UserInfo id={1} name="alx" email="alx@alx" />
		<AdminInfo admin={admin} />
    </div>
  );
}

export default App;
