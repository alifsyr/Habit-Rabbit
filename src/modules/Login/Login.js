import React, { Component } from "react";
import { Redirect } from 'react-router';
import { Form, FormGroup, FormControl, FormLabel, Button, Spinner, FormControlProps } from "react-bootstrap";
import "./Login.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { setCookie, getCookie } from "../../services/Cookie";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      redirect: false,
      username: "",
      password: "",
    };
  }

  login = () => {
    this.setState({loading:true})

    setCookie('login', true, 2);
    setCookie('username', this.state.username, 2);

    this.setState({login:true, redirect:true})
  }

  render() {
    if (this.state.redirect) return <Redirect to='/choose-mbti' />
    const { username, password, isValid } = this.state;

    return (
      <div>
        <Header/>
        <div className="content">
          <div className="Login">
            <div className="login-title">Sign In</div>
            <Form noValidate validated={isValid} onSubmit={this.onLogin}>
              <FormGroup controlId="email">
                <FormLabel>Username</FormLabel>
                <FormControl
                  name="username"
                  type="text"
                  value={username}
                  onChange={(event)=>{this.setState({username:event.target.value})}}
                  required />
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
                onClick={()=>{this.login()}}>
                {this.state.loading ?
                  <span><Spinner size="sm" animation="border" className="mr-2" />Logging in</span> :
                  <span>Log in</span>}
              </Button>

              <Button className='back-button' block type="submit" href='/choose-mbti'>
                        <span>Kembali</span>
              </Button>
            </Form >
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Login;