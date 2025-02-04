const reducer = (state, action)=>{

	switch(action.type){
		case 'INCREMENT':
			return {...state, counter: state.counter + 1}
		case 'DECREMENT':
			return {...state, counter: state.counter - 1}
		case 'INCREMENT_BY':
			return {...state, counter: state.counter + action.payload}
		case 'DECREMENT_BY':
			return {...state, counter: state.counter - action.payload}
		case 'SET_PAYLOAD':
			return {...state, payload: action.payload}
		case 'RESET':
			return {...state, counter: 0}
		default:
			return state
	}
}

export default reducer;
