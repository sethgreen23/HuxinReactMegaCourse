import React from 'react'

const FocusInput = () => {
	const inputField = React.useRef(null)
	const handleFocus = () => {
		inputField.current.focus();
	}
  return (
	<div>
	  <input type="text" ref={inputField} />
	  <button onClick={handleFocus}>Focus</button>
	</div>
  )
}

export default FocusInput
