import React, { Component } from "react";
import { Redirect } from 'react-router';
import { Form, FormGroup, FormControl, FormLabel, Button, Spinner, FormControlProps } from "react-bootstrap";
import "./Signup.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { setCookie, getCookie } from "../../services/Cookie";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      name: "",
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
      <div className='signup'>
      <form>
         <div className='signup-container'>
            <h1>Sign Up</h1>
            <label for="nickname">What's your nickname?</label>
            <input type="text" name="name" id="nickname" required onChange={(event)=>{this.setState({name:event.target.value})}} />
            <br/>
            <label for="username">Create a username</label>
            <input type="text" name="username" id="username" required onChange={(event)=>{this.setState({username:event.target.value})}} />
            <br/>
            <label for="password">Create a password</label>
            <input type="password" name="password" id="password" minlength="8" required onChange={(event)=>{this.setState({password:event.target.value})}} />
            <br/>
            <input type="submit" value="Sign Up" id="sign-up" onClick={()=>this.signup()}/>
            <br/>
            <p>Already a member? <a href="/login">Click Here!</a></p>
          </div>
      </form>
      </div>
    );
  }

  render() {
    return (
      <div class="body">
        <Header />
        <div className="Signup">

          {this.showSignupForm()}

        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;