import React from 'react';
import "./style.css";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top className="card-image-top" src={props.photos}  alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">{props.name}</CardTitle>
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