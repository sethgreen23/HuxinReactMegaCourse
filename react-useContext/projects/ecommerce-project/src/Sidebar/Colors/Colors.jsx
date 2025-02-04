import Input from '../../components/Input'
import './Colors.css'

const Colors = ({ handleChange }) => {
	return (
		<div className=''>
			<h2 className="sidebar-title price-title">Colors</h2>


			<label htmlFor="" onChange={handleChange} className="sidebar-label-container">
				<input type="radio" name="colors" value="" />
				<span className="checkmark all" ></span>All
			</label>

			<Input handleChange={handleChange} name="colors" value="black" title="Black" color="black" />
			<Input handleChange={handleChange} name="colors" value="blue" title="Blue" color="blue" />
			<Input handleChange={handleChange} name="colors" value="red" title="Red" color="red" />
			<Input handleChange={handleChange} name="colors" value="green" title="Green" color="green" />
			<label htmlFor="" onChange={handleChange} className="sidebar-label-container">
				<input type="radio" name="colors" value="white" />
				<span className="checkmark" style={{ backgroundColor: "white", border: '2px solid black' }}></span>White
			</label>

		</div>
	)
}

export default Colors
