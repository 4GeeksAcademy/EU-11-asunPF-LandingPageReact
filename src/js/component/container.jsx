import React from "react";
import {Card} from "./card.jsx"
import { JumboTron } from "./jumbotron.jsx";

export const Container = ({ children }) => {

return (
    <div className="container-fluid p-3 "  style={{width:"82%", justifyContent:"center"}}>
        <JumboTron />
            <div className="container-fluid d-flex  g-4 p-2" style={{ justifyContent:"space-between", textAlign:"center"}} >
                <Card />    
                <Card />
                <Card />
                <Card />
                </div>
        {children}

    </div>
   
   
)



}

