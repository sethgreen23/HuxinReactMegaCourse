import React, { useState } from 'react'

const App = () => {
	const [counter, setCounter] = useState(0);
	const increment = () => {
		setCounter(prev => prev + 1)
	}
	const decrement = () => {
		setCounter(prev => prev - 1)
	}
	return (
		<div>

			<div className='container'>

				<div className="number">{counter}</div>

			</div>
			<div className="btns-container">
				<button onClick={increment} className="increment">+</button>
				<button onClick={decrement} className="increment">-</button>
			</div>

		</div>

	)
}

export default App
