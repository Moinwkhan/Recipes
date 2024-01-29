import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";


function home() {
  return (
    <header className="body">
      <div className="home">
        <h1 className="heading">Our Recipes</h1>
        <Button className="btn" inverted color='olive' size="big" style={{height:50 , width:150}} as={Link} to="/recipes" >
        Search
      </Button>
      </div>
    </header>
  );
}

export default home;
