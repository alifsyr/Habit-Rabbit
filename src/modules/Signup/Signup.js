import React, { Component } from "react";
import { Redirect } from 'react-router';
import { Form, FormGroup, FormControl, FormLabel, Button, Spinner, FormControlProps } from "react-bootstrap";
import "./Signup.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { setCookie, getCookie } from "../../services/Cookie";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      user: undefined,
      redirect: false,
      validated: false,
    };
  }
  
  signup() {
    this.setState({loading:true})

    setCookie('login', true, 2);
    setCookie('username', this.state.username, 2);

    this.setState({login:true, redirect:true})
  }

  showSignupForm = () => {
    if (this.state.redirect) return <Redirect to='/choose-mbti' />
    
    const { email, username, password, confirmPassword } = this.state;
    return (
      <Form noValidate>
        <h1>Habbit Rabbit</h1><br></br>
        <FormGroup controlId="email">
          <FormLabel>What's your e-mail?</FormLabel>
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
        <FormGroup controlId="username">
          <FormLabel>Create a username</FormLabel>
          <FormControl
            name="username"
            type="username"
            onChange={(event)=>{this.setState({username:event.target.value})}}
            value={username}
            minLength={6}
            isValid={username.length >= 6}
            required />
          <FormControl.Feedback type="invalid">Username has taken</FormControl.Feedback>
        </FormGroup>
        <FormGroup controlId="password" >
          <FormLabel>Create a password</FormLabel>
          <FormControl
            name="password"
            type="password"
            onChange={(event)=>{this.setState({password:event.target.value})}}
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
            onChange={(event)=>{this.setState({confirmPassword:event.target.value})}}
            value={confirmPassword}
            minLength={8}
            isValid={confirmPassword.length >= 8 && password === confirmPassword}
            required />
          <FormControl.Feedback type="invalid">Passwords must be identical</FormControl.Feedback>
        </FormGroup>
        <Button block type="submit" onClick={()=>this.signup()}>
          {this.state.loading ?
            <span><Spinner size="sm" animation="border" className="mr-2" />Signing up</span> :
            <span>Sign up</span>}
        </Button>
      </Form>
    );
  }

  render() {
    return (
      <div class="body">
        <Header />
        <div className="Signup">

          {this.showSignupForm()}

          <Button className='back-button' block type="submit" href='/home'>
            <span>Back</span>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;