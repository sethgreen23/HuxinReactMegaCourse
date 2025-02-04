import Input from '../../components/Input'
import './Category.css'

const Category = ({ handleChange }) => {
	return (
		<div className=''>
			<h2 className="sidebar-title">Category</h2>

			<div >
				<Input handleChange={handleChange} name="category" value="" title="All" color="" />
				<Input handleChange={handleChange} name="category" value="sneakers" title="Sneakers" color="" />
				<Input handleChange={handleChange} name="category" value="flats" title="Flats" color="" />
				<Input handleChange={handleChange} name="category" value="sandals" title="Sandals" color="" />
				<Input handleChange={handleChange} name="category" value="heels" title="Heels" color="" />
			</div>
		</div>
	)
}

export default Category
