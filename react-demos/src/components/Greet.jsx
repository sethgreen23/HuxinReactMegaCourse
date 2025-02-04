import "../index.css"
const Greet = ({timeOfDay}) => {
	
	return (
		<section className="text-3xl">
			{timeOfDay=== "morning" && <p>Good Morning</p>}
			{timeOfDay=== "afternoon" && <p>Good Afternoon</p>}
		</section>
	)
}


export default Greet;
