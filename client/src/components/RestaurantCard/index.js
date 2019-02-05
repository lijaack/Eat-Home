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
          <CardText>{props.about}</CardText>
          <Button 
            data-id={props.id}
            onClick={props.visitPage} 
            color="success">Visit
            </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;