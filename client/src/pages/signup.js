import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    name: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    if (this.state.username && this.state.password && this.state.name) {
      API.signUp({
          username: this.state.username,
          password: this.state.password,
          name: this.state.name
      })
          .then(res => window.location.href = res.data)
          .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-3"></Col>
            <Col size="md-6">
                <h3>Sign Up Form</h3>
                <form>
                    <label for="username">Username:</label>
                    <Input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username"
                    />
                    <label for="password">Password:</label>
                    <Input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                    <label for="name">Name:</label>
                    <Input
                        type="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name"
                    />
                     <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Sign Up
                    </FormBtn>
                </form>
            </Col>
            <Col size="md-3"></Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
