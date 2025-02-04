import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
	const [counter, setCounter] = useState(0);

	const handleCounterMinus = ()=>{
		setCounter(prev => prev - 1)
	}
	const handleCounterPlus = ()=>{
		setCounter(prev => prev + 1)
	}

	useEffect(()=>{
		document.title = counter;
	},[counter])
	return (
		<div>
			<p>{counter}</p>
			<button onClick={handleCounterPlus} className='p-4 px-8 rounded-full text-white bg-violet-500'>+</button>
			<button onClick={handleCounterMinus} className='p-4 px-8 rounded-full text-white bg-violet-500'>-</button>
		</div>
	)
}

export default CounterEffect
