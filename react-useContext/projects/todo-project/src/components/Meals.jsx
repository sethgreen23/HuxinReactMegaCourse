
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Meals = () => {
	const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

	const [meals, setMeals] = useState([])
	// strMeal, strMealThumb, idMeal
	useEffect(() => {
		async function fetchMeals() {
			try {
				const response = await axios.get(url);
				const data = await response.data.meals;
				console.log(data);
				setMeals(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchMeals()
	}, [])
	return <section className='items-container'>
		{
			meals.length > 0 && meals.map(meal => (
				<section className="card" key={meal.idMeal}>
					<img src={meal.strMealThumb} alt={meal.strMeal} />
					<div className="content">
						<h4>{meal.strMeal}</h4>
						<p>{meal.idMeal}</p>
					</div>
				</section>
			))
		}
	</section>
}

export default Meals
