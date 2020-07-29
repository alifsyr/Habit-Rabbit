import React, { Component } from "react";
import { Redirect } from 'react-router';
import { Form, FormGroup, FormControl, FormLabel, Button, Spinner, FormControlProps } from "react-bootstrap";
import "./Signup.css";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      user: undefined,
      redirect: false,
      validated: false,
    };
  }

  showSignupForm = () => {
    const { email, password, confirmPassword, validated } = this.state;
    return (
      <Form noValidate>
        <h1>Habbit Rabbit</h1><br></br>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            name="email"
            type="email"
            onChange={(event)=>{this.setState({email:event.target.value})}}
            value={email}
            minLength={5}
            isValid={emailRegex.test(email.toLowerCase())}
            required />
          <FormControl.Feedback type="invalid">Must be a valid email address</FormControl.Feedback>
        </FormGroup>
        <FormGroup controlId="password" >
          <FormLabel>Password</FormLabel>
          <FormControl
            name="password"
            type="password"
            onChange={(event)=>{this.setState({email:event.target.value})}}
            value={password}
            minLength={8}
            isValid={password.length >= 8}
            required />
          <FormControl.Feedback type="invalid">Must be at least 8 characters</FormControl.Feedback>
          <Form.Text className="text-muted">
            Must be at least 8 characters
          </Form.Text>
        </FormGroup>
        <FormGroup>
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            name="confirmPassword"
            type="password"
            onChange={(event)=>{this.setState({email:event.target.value})}}
            value={confirmPassword}
            minLength={8}
            isValid={confirmPassword.length >= 8 && password === confirmPassword}
            required />
          <FormControl.Feedback type="invalid">Passwords must be identical</FormControl.Feedback>
        </FormGroup>
        <Button block type="submit">
          {this.state.loading ?
            <span><Spinner size="sm" animation="border" className="mr-2" />Signing up</span> :
            <span>Sign up</span>}
        </Button>
      </Form>
    );
  }

  render() {
    return (
      <div className="Signup">

        {this.showSignupForm()}

        <Button className='back-button' block type="submit" href='/home'>
          <span>Kembali</span>
        </Button>
      </div>
    );
  }
}

export default Signup;