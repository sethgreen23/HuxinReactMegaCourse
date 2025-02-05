import Counter from './components/Counter'
import UserProfile from './components/UserProfile'
import {type Info} from './components/UserProfile'
function App() {
	const user: Info = {
		name: "Chaith Dridi",
		id:1,
		email: "dridi.chaith@gmail.com",
		location: {
		  city: "Mateur",
		  country: "Tunisia",
		}
	  };
  return (
	<div>
	  {/* <Counter	/> */}
	  <UserProfile user={user} />
	</div>
  )
}

export default App
