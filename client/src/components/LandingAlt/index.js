import React from "react";
import ListItem from "../ListItem";
const items = [{

  title: "best restaurant",
  image: "/assets/200x200.svg",
  text: "lorem ipsum Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."

},{

  title: "best restaurant",
  image: "/assets/200x200.svg",
  text: "lorem ipsum Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."

},{

  title: "best restaurant",
  image: "/assets/200x200.svg",
  text: "lorem ipsum Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."

}];

function LandingMiddle() {
  return (

    <div className="lm">
      <h1>Hello, world!</h1>
      <ul className="list-unstyled">

      {items.map((item) => <ListItem title={item.title} img={item.image} txt={item.text}/>)}     

      </ul>

    </div>
  
  );
}

export default LandingMiddle;
