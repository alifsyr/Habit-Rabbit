import React, { Component } from "react";
import { Redirect } from 'react-router';
import { Form, FormGroup, FormControl, FormLabel, Button, Spinner, FormControlProps } from "react-bootstrap";
import "./Login.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      redirect: false,
      email: "",
      password: "",
      isValid: false,
    };
  }

  validateForm = () => {
    return emailRegex.test(this.state.email.toLowerCase()) && this.state.password;
  }

  render() {
    if (this.state.redirect) return <Redirect to='/' />
    const { email, password, isValid } = this.state;

    return (
      <div>
      <Header/>
      <div className="Login">
        <h1>Habbit Rabbit</h1><br></br>
        <Form noValidate validated={isValid} onSubmit={this.onLogin}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              name="email"
              type="email"
              value={email}
              onChange={(event)=>{this.setState({email:event.target.value})}}
              isValid={emailRegex.test(email.toLowerCase())}
              required />
            <FormControl.Feedback type="invalid">Must be a valid email address</FormControl.Feedback>
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              name="password"
              type="password"
              value={password}
              minLength={8}
              onChange={(event)=>{this.setState({password:event.target.value})}}
              isValid={password.length >= 8}
              required />
            <FormControl.Feedback type="invalid">Required field</FormControl.Feedback>
          </FormGroup>
          <Button
            block
            type="submit"
            disabled={!this.validateForm()}>
            {this.state.loading ?
              <span><Spinner size="sm" animation="border" className="mr-2" />Logging in</span> :
              <span>Log in</span>}
          </Button>

          <Button className='back-button' block type="submit" href='/home'>
                    <span>Kembali</span>
          </Button>
        </Form >
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Login;