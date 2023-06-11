import React from "react";
import NavBar from "./navbar.jsx";
import JumboTron from "./jumbotron.jsx";

import ReactDOM from "react-dom";
import Card from "./card.jsx";
import Footer from "./footer.jsx";



//create your first component
const Home = () => {
	return (
		<>
		<NavBar />
		<JumboTron />
		<Card />
		<Footer />
		</>
	);
};

export default Home;


ReactDOM.render(Home, document.querySelector("#app"));
