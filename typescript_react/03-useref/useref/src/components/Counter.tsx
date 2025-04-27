import { useReducer } from "react"

enum CountActionKind {
	increment= "increment",
	decrement= "decrement",
	reset= "reset"

}
interface CountState {
	counter: number;
}
interface CountAction {
	type: CountActionKind,
}
function Counter() {
	const intialState = {
		counter: 0,
	}
	const reducer = (state: CountState, action: CountAction): CountState => {
		switch (action.type) {
			case CountActionKind.increment:
				return {...state, counter: state.counter + 1};
			case CountActionKind.decrement:
				return {...state, counter: state.counter - 1};
			case CountActionKind.reset:
				return {...state, counter: 0}
			default:
				return state;
		}
	}
	const [state, dispatcher] = useReducer(reducer, intialState);
  return (
	<div>
	  <h2>Counter: {state.counter}</h2>
	  <button onClick={()=>dispatcher({type: CountActionKind.increment})}>+</button>
	  <button onClick={()=>dispatcher({type: CountActionKind.decrement})}>-</button>
	  <button onClick={()=>dispatcher({type: CountActionKind.reset})}>Reset</button>
	  
	</div>
  )
}

export default Counter
