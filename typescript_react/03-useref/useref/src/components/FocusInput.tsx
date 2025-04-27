import { useEffect, useRef } from "react"

function FocusInput() {
	const inputRef = useRef<HTMLInputElement>(null)
useEffect(()=>{
	inputRef.current?.focus();
}, [])
  return (
	<>
	<div>
		<label htmlFor="Name">Name: </label>
	  <input type="text" ref={inputRef} />
	</div>
	<div>
		<label htmlFor="Name">Email: </label>
	  <input type="text" />
	</div>
	</>
  )
}

export default FocusInput
