import React from "react";

import '/workspaces/EU-11-asunPF-LandingPageReact/src/styles/index.css';




//create your first component

export const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand bg-dark ">
            <div className="container-fluid" style={{width:"80%"}}>
                <a className="navbar-brand text-light" href="#">
                Start Bootstrap
                </a>
                <div class="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white-50" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white-50" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white-50" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    );
};
