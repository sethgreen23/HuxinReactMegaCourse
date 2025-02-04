import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css'
import { FaOpencart } from "react-icons/fa";
const Sidebar = ({ handleChange }) => {
	return (
		<>

			<section className="sidebar">
				<div className="logo-container">
					<h1><FaOpencart className='logo-icon' /></h1>
				</div>

				<Category handleChange={handleChange} />
				<Price handleChange={handleChange} />
				<Colors handleChange={handleChange} />
			</section>
		</>
	)
}

export default Sidebar
