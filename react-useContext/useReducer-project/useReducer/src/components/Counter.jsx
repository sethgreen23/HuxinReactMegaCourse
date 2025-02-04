import React, { useReducer, useState } from 'react'
import reducer from './counterReducer'
const Counter = () => {
	const [state, dispatch] = useReducer(reducer, {
		counter: 0,
	})
	const [inputValue, setInputValue] = useState(0);

	return (
		<>
			<div>
				<h1>{state.counter}</h1>
				<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
				<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
				<button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
				<br />
			</div>
			<br />
			<div>
				<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				<button onClick={() => {
					dispatch({ type: 'INCREMENT_BY', payload: Number(inputValue) })
					setInputValue(0)
				}
				}>increment by</button>
				<button onClick={() => {
					dispatch({ type: 'DECREMENT_BY', payload: Number(inputValue) })
					setInputValue(0)
				}}>decrement by</button>
			</div>
		</>
	)
}

export default Counter
