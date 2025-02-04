import Input from '../../components/Input'
import './Price.css'

const Price = ({handleChange}) => {
	return (
		<div className='ml'>
			<h2 className="sidebar-title price-title">Price</h2>
			<Input handleChange={handleChange} name="price" value="" title="All" color="" />
			<Input handleChange={handleChange} name="price" value="50" title="$0 - $50" color="" />
			<Input handleChange={handleChange} name="price" value="100" title="$50 - $100" color="" />
			<Input handleChange={handleChange} name="price" value="150" title="$100 - $150" color="" />
			<Input handleChange={handleChange} name="price" value="200" title="$150 - $200" color="" />
			
			{/* <label htmlFor="" className="sidebar-label-container">
				<input type="radio" name="price" value="200" />
				<span className="checkmark"></span>$150 - $200
			</label> */}
		</div>
	)
}

export default Price
