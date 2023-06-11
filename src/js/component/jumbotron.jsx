import React from "react";


//create your first component
export const JumboTron = () => {
	return (
        <div className="jumbotron bg-light p-3"  >
        <h1 className="display-4">A Warm welcome!</h1>
        <p className="lead">The key of this project is to help you understand how to pick the components that you want to build, you have to think the best way to organize and avoid future errors. What can be re-used? If your code is tuning into something big and hard to understand you probably will need to split it into components: jumbotron, navbar, card.</p>
        
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="https://4geeks.com/syllabus/europe-fs-pt-11/project/landing-page-with-react" role="button">Call to action</a>
        </p>
      </div>
	);
};


