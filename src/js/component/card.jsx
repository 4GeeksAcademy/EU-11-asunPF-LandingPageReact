import React from "react";

//create your first component
export const Card = () => {
	return (
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="https://picsum.photos/500/325" alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="white">Go somewhere</a>
        </div>
      </div>
	);
};

export default Card;

