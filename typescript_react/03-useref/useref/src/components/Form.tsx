import { FormEvent, useRef, useState } from "react"

interface FormProps {
	name: string;
	email: string;
	password: string;
}
const data = {
	name: '',
	email: '',
	password: ''
}
function Form() {
	const name = useRef<HTMLInputElement | null>(null)
	const email = useRef<HTMLInputElement | null>(null)
	const password = useRef<HTMLInputElement | null>(null)
	const [formData, setFormData] = useState<FormProps>(data)

	function handleSubmit(e: FormEvent<HTMLFormElement>){
		e.preventDefault();
		const nameValue = name.current?.value;
		const emailValue = email.current?.value;
		const passwordValue = password.current?.value;

		if(nameValue && emailValue && passwordValue){
			setFormData({
				name: nameValue,
				email: emailValue,
				password: passwordValue
			})
		}else{
			alert('Please fill out all fields')
		}
	}
  return (
	<div>
	  <form onSubmit={handleSubmit}>
		<div>
			<label htmlFor="name">Name: </label>
			<br />
			<input type="text" id="name" ref={name}/>
		</div>
		<div>
			<label htmlFor="email">Email: </label>
			<br />
			<input type="email" id="email" ref={email}/>
		</div>
		<div>
			<label htmlFor="password">Password: </label>
			<br />
			<input type="password" id="password" ref={password} />
		</div>
		<button type="submit">Save</button>
	  </form>

	  <div>
		<h2>Form Data</h2>
		<p>Name: {formData.name}</p>
		<p>Email: {formData.email}</p>
		<p>Password: {formData.password}</p>
	  </div>
	</div>
  )
}

export default Form
