import './Recommended.css'

const Recommended = ({ handleClick}) => {
	return (
		<div>
			<h2 className='recommended-title'>Recommended</h2>
			<div className="recommended-flex">
				<button onClick={handleClick} value="" className='btn'>All Products</button>
				<button onClick={handleClick} value="nike" className='btn'>Nike</button>
				<button onClick={handleClick} value="adidas" className='btn'>Adidas</button>
				<button onClick={handleClick} value="puma" className='btn'>Puma</button>
				<button onClick={handleClick} value="vans" className='btn'>Vans</button>
			</div>
		</div>
	)
}

export default Recommended
