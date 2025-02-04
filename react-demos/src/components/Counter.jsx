import React, { useState } from 'react'

const Counter = () => {
	const [counter, setCounter] = useState(0)
  const handleClick = ()=>{
	setCounter(prev => prev+1)
  }
	return (
	<div>
		<p>{counter}</p>
		<button className='bg-violet-500 p-3 w-4 h-4 flex justify-center items-center' onClick={handleClick}>+</button>
	</div>
  )
}

export default Counter
