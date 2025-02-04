import React, { useRef, useState } from 'react'

const Timer = () => {

	const [time, setTime] = useState(0);
	const [isRuning, setIsRuning] = useState(false);
	const interval = useRef(null);

	const start = () =>{
		if(!isRuning){
			interval.current = setInterval(() => {
				setTime((prev) => prev + 1);
			}, 1000)
			setIsRuning(true);
		}
	}

	

	const stop = () => {
		if(isRuning){
			clearInterval(interval.current);
			setIsRuning(false);
		}
	}

	const stopAndReset = () => {
		clearInterval(interval.current);
		setTime(0);
		setIsRuning(false);
	}
	const reset = () => {
		setTime(0);

	}
	return (
		<div>
			<h1>{time}</h1>
			<button onClick={start}>Start</button>
			<button onClick={stop}>Stop</button>
			<button onClick={reset}>Reset</button>
			<button onClick={stopAndReset}>Stop and Reset</button>
		</div>
	)
}

export default Timer
