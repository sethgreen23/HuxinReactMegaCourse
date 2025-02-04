import UserProvider from './components/UserContext'
import Counter from './components/Counter'
const App = () => {
	return (
	<UserProvider>
		<Counter />
	</UserProvider>
  )
}

export default App
