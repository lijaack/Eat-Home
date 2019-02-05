import React from 'react';
import { Col, Row, Container} from "../Grid";
import { Input, TextArea, FormBtn } from "..//Form";

const newRestaurant = (props) => {
  return (
    <section className="vendor-section">
    <Container>
        <h1>
            Create your restaurant
        </h1>
        <form className="form">
        <label for="restaurantName">Restaurant Name:</label>
        <Input
            value={this.state.restaurantName}
            name="restaurantName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Business Name"
        />
        <label for="about">About:</label>
        <Input
            value={this.state.about}
            name="about"
            onChange={this.handleInputChange}
            type="text area"
            rows="4"
            placeholder="About"
        />
         <label for="address">Address:</label>
        <Input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text area"
            rows="4"
            placeholder="Address"
        />
        <label for="image">Image:</label>
        <Input
            value={this.state.image}
            name="image"
            onChange={this.handleInputChange}
            type="text area"
            placeholder="Image"
        />
        </form>
        <button type="button" className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
    </Container>
</section>
  );
};

export default newRestaurant;