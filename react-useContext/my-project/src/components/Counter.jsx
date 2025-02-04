import  { useContext } from 'react'
import { UserContext } from './UserContext';

const Counter = () => {
	const {counter, setCounter} = useContext(UserContext);
  return (
	<div>
		<h1>{counter}</h1>
		<button className='bg-blue-500' onClick={() => setCounter(counter + 1)}>Increment</button>
	  
	</div>
  )
}

export default Counter;