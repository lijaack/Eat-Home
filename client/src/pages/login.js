import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount(){
    API.getUser().then(res => console.log(res));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.username)
    API.login({
      username: this.state.username,
      password: this.state.password
    }).then(
    )
  };

  render() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-3"></Col>
            <Col size="md-6">
                <h3>Login Form</h3>
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
                        value={this.state.Password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                     <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Login
                    </FormBtn>
                </form>
            </Col>
            <Col size="md-3"></Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
