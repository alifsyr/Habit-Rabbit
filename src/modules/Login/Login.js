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
        <div className='login'>
          <form>
            <div className='login-container'>
                <h1>Log In</h1>
                <br/>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required onChange={(event)=>{this.setState({username:event.target.value})}}/>
                <br/>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required onChange={(event)=>{this.setState({password:event.target.value})}}/>
                <br/>
                <input type="submit" value="Log In" id="sign-in" onClick={()=>this.login()}/>
                <br/>
                <p>Don't have an account? <a href="/signup">Click Here!</a></p>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Login;