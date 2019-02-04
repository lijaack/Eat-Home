import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function CreateMenu() {
  return (

    <Form className>
      <InputGroup className="md-3">
 
  <Form.Group controlId="menuItem" >
    <Form.Label>Menu Item</Form.Label>
    <Form.Control type="menuItem" placeholder="Enter Menu Item Name" />
    <Form.Text className="text-muted">
      Enter Menu Item Above
    </Form.Text>
  </Form.Group>
   

  <Form.Group controlId="menuItemIngredients">
    <Form.Label>Menu Item Ingredients</Form.Label>
    <Form.Control type="menuItemIngredients" placeholder="Enter Menu Item Ingredient list" />
    <Form.Text className="text-muted">
      Enter Ingredients
    </Form.Text>
  </Form.Group>

  
  <Form.Group controlId="menuItemPrice">
    <Form.Label>Menu Item Ingredients</Form.Label>
    <Form.Control type="menuItemPrice" placeholder="Enter Menu Item Price" />
    <Form.Text className="text-muted">
      Enter Ingredients
    </Form.Text>
  </Form.Group>


  <Form.Group controlId="menuItemImg">
    <Form.Label>Menu Item Image</Form.Label>
    <Form.Control type="menuItemImg" placeholder="http://www.linktoimage" />
    <Form.Text className="text-muted">
      Enter a link to image
    </Form.Text>
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
  </InputGroup>
</Form>
  
  );
}

export default CreateMenu;
