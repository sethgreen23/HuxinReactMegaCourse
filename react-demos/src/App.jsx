import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";


function App(props){
	return (
		<>
		<section className="content flex flex-col min-h-screen justify-between w-full">
		<Header />
		<MainContent />
		<Footer />
		</section>
		</>
	)
}

export default App;