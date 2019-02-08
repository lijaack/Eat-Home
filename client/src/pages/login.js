import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";


function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
      }
  }
  return null;
}
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
    // }).then(
    //   function (data) {
    //       console.log("login creating cookies: ", data.id)
    //       document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    //       document.cookie = "userpassword=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    //       document.cookie = "username=" + this.state.username + ";";
    //       document.cookie = "userpassword=" + this.state.userpasssword + ";";
          // location.reload();
      }).then(
      window.location.href = "/"
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
