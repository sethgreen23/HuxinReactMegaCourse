import { useState } from "react";

function Counter() {
	const [counter, setCounter] = useState<number>(0);
  return (
	<div>
	  <h1>Counter App</h1>
	  <h2>{counter}</h2>
	  <button onClick={() => setCounter(counter + 1)}>Increment</button>
	  <button onClick={() => setCounter(counter - 1)}>Decrement</button>
	</div>
  )
}

export default Counter
