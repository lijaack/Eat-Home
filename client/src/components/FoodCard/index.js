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
          <CardSubtitle>{props.price}</CardSubtitle>
          <CardText>{props.ingredient}</CardText>
          <Button 
            data-id={props.restaurantid}
            onClick={props.visitPage} 
            color="success">Visit
            </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;