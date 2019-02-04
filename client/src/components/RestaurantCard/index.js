//import React from "react";
//
//function RestaurantCard(props) {
//    return (
//
//        <div class="card h-100">
//        { <img class="card-img-top" src="..." alt="Card image cap"/>
//        <a href=""><img class="card-img-top" src="" alt="Card image cap"/></a>
//        <div class="card-body">
//        <h5 class="card-title"><a href=""></a></h5>
//        <p class="card-text"></p>
//        <p class="card-text"></p>
//
//        <div id=""><a href="" class="btn btn-primary">View Restaurant</a></div>
//        </div>
//        }
//        </div>
//
//    );
//}
//
//export default RestaurantCard;
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.photos}  alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;