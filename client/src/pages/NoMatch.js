import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
    <br /> 
     <Link style={{marginLeft: 10}} to="/Home">← Back to Home </Link>
      <Jumbotron>
        <h1>404 Page Not Found</h1>  
        <img src='./images/wrongpage.gif' alt='starwars man gif saying page is not found '/>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
