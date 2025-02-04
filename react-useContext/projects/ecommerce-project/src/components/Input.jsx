import React from 'react'

const Input = ({handleChange, name, value, title, color}) => {
	return (
		<label htmlFor="" className="sidebar-label-container">
			<input onChange={handleChange} type="radio" name={name} value={value} />
			<span className="checkmark" style={{backgroundColor: color}}></span>{title}
		</label>
	)
}

export default Input
