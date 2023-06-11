import React from "react";



//create your first component

import {NavBar} from "./navbar.jsx"
import { JumboTron } from "./jumbotron.jsx";
import {Card} from "./card.jsx"
import {Footer} from "./footer.jsx"
import { Container } from "./container.jsx";


 export const App = () => {
	return (
		<div>
      <NavBar />
      <Container />     
		 
		 
      <Footer />

    </div>
	);
};
/*
<div className='container row g-4'>
<Card />
<Card />
<Card />
<Card />
</div>


  /*<>
		<NavBar />
    <div className="container-fluid d-flex">
        <JumboTron /> 	
        <div className="container-fluid d-flex">	
        <div className="row">
         <Cards />
         <Cards />
         <Cards />
         <Cards />
         </div>
         </div>
    </div>
        <Footer />
		</>





/*function App() {
    return (
        <div>
        <Navbar />  
        <div className="container">
        <Jumbotron />  
          <div className="row">
            <div className="col">
            <PresetCard />
            </div>
            <div className="col">
            <PresetCard />
            </div>
            <div className="col">
            <PresetCard />
            </div>
            <div className="col">
            <PresetCard />
            </div>
          </div>
        </div>
        <Footer />
        </div>
      );
    }*/