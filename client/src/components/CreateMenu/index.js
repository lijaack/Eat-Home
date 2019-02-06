import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateMenu extends React.Component {
  render() {
    return (
      <Form className="col-md-4">
        <FormGroup>
          <Label for="menuItem">Menu Item</Label>
          <Input type="text" name="menuItem" id="menuItem" placeholder="pizza" />
        </FormGroup>
  
        <FormGroup>
          <Label for="ingredientList">Ingredient List</Label>
          <Input type="text" name="ingredientList" id="ingredientList" placeholder="flour, water, sauce, cheese" />
        </FormGroup>

  
        <FormGroup>
          <Label for="menuItemWriteup">Menu Item Writeup</Label>
          <Input type="textarea" name="text" id="menuItemWriteup" />
        </FormGroup>

        <FormGroup>
          <Label for="Item Photo">Item Photo URL</Label>
          <Input type="text" name="photoURL" id="photoURL" placeholder="http://lorempixel.com/output/food-q-c-640-480-3.jpg" />
        </FormGroup>


        <FormGroup>
          <Label for="exampleFile">Upload Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            If you have a photo of this item upload it here.
          </FormText>
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}