import './Navigation.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
const Nagication = ({handleInputChange, query}) => {
	return (
		<nav>
			<div className="nav-container">
				<input className='search-input' type="text" placeholder='Search...'
				 value={query} onChange={handleInputChange}/>
			</div>

			<div className="profile-container">
				<a href="#" className="href">
					<FiHeart className='nav-icons'/>
				</a>
				<a href="#" className="href">
					<AiOutlineShoppingCart className='nav-icons'/>
				</a>
				<a href="#" className="href">
					<AiOutlineUserAdd className='nav-icons'/>
				</a>
			</div>
		</nav>
	)
}

export default Nagication
