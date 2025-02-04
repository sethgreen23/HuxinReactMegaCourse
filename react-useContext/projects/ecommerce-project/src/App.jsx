import Navigation from './Navigation/Navigation'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import './index.css'
import Sidebar from './Sidebar/Sidebar'
import { useState } from 'react'
import products from './db/data'
import Card from './components/Card'
import { v4 as uuidv4 } from 'uuid';
function App() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	// input Filter
	const [query, setQuery] = useState("")

	const handleInputChange = event => {
		setQuery(event.target.value);
	}

	const filteredItems = products.filter(product => {
		return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	})

	// radio filters
	const handleChange = event => {
		setSelectedCategory(event.target.value)
	}
	
	// button filter
	const handleClick = event => {
		
		setSelectedCategory(event.target.value)
	}

	// main function of filtering
	function filteredData(products, selected, query) {
		let filteredProducts = products;
		// filtering input items
		if (query) {
			filteredProducts = filteredItems
		}

		// selected filter
		if (selected) {
			
			filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => {
				

				return category === selected || color === selected || company === selected ||
					(Number(newPrice) <= Number(selected) && Number(newPrice) >= Number(selected) - 50) || title.toLowerCase().includes(selected);
			})
		}
		
		return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => <Card key={uuidv4()} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} />)
	}
	const result = filteredData(products, selectedCategory, query)
	
	return (
		<>
			<Sidebar handleChange={handleChange} />
			<Navigation query={query} handleInputChange={handleInputChange} />
			<Recommended handleClick={handleClick} />
			<Products result={result} />
		</>
	)
}

export default App
