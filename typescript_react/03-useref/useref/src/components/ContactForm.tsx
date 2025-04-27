import { FormEvent, useRef, useState } from "react";

type FormProps = {
	name: string;
	email: string;
	password: string
}

type DeepPartial<T> ={
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}

function ContactForm() {
	const dataPartial : DeepPartial<FormProps> ={};
	const name = useRef<HTMLInputElement | null>(null);
	const email = useRef<HTMLInputElement | null>(null);
	const password = useRef<HTMLInputElement | null>(null);
	const [formData, setFormData] = useState<DeepPartial<FormProps>>(dataPartial);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const nameValue = name.current?.value;
		const emailValue = email.current?.value;
		const passwordValue = password.current?.value;

		if (nameValue && emailValue && passwordValue) {	
			setFormData({
				name: nameValue,
				email: emailValue,
				password: passwordValue
			})
		}else {
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
			<label htmlFor="password">password: </label>
			<br />
			<input type="password" id="password" ref={password}/>
		</div>
		<button type="submit">Submit</button>
	  </form>
	  <div>
		  <p>{JSON.stringify(formData)}</p>
	  </div>
    </div>
  );
}

export default ContactForm;
