import React, { Component } from 'react';
import './Header.css';
import { Form, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

import { setCookie, getCookie } from "../../services/Cookie";

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state={
      login: false
        }
    }

    showLoginSignup() {
      return (
        <>
        <li class="nav-item">
          <NavLink
            to="/login"
            className="nav-link"
            activeStyle={{ fontWeight: 'bold' }}
          >
            Login
          </NavLink>
        </li>
          <li class="nav-item">
          <NavLink
              to="/signup"
              className="nav-link"
              activeStyle={{ fontWeight: 'bold' }}
            >
            Signup
          </NavLink>
        </li>
        </>
      )
    }

    showUserManagement() {
      const message = "Hello, " + getCookie('username')
    
      return(
        <>
        <NavLink
          to="/progress"
          className="nav-link"
          activeStyle={{ fontWeight: 'bold' }}
          >
          Progress
        </NavLink>

        <div class="dropdown">
          <button class="dropbtn">{message}</button>
          <div class="dropdown-content">
              <a href="/profile">Profile</a>
              <a href="/" onClick={(()=>this.logout())}>Logout</a>
          </div>
        </div>
        </>
      )
    }
    
    logout() {
      setCookie('login', false, 0)
      setCookie('username', '', 0)
      setCookie('mbti', '', 0)
    }

    render() {
        return (
            <div class="navbar"> 
                <ul class="d-flex justify-content-start">
                  <li class="nav-item">
                      <NavLink
                          to="/"
                          className="nav-link"
                      >
                        <div className='title'>
                          <strong>Habit</strong> Rabbit
                        </div>
                      </NavLink>
                  </li>
                  </ul>
                <ul class="d-flex justify-content-end">
                  <li class="nav-item">
                      <NavLink
                          to="/home"
                          className="nav-link"
                          activeStyle={{ fontWeight: 'bold' }}
                      >
                        Home
                      </NavLink>
                  </li>
                  <li class="nav-item">
                      <NavLink
                          to="/about"
                          className="nav-link"
                          activeStyle={{ fontWeight: 'bold' }}
                      >
                        About
                      </NavLink>
                  </li>
                  {!getCookie('login')?
                    this.showLoginSignup()
                    :
                    this.showUserManagement()
                  }
                </ul>
            </div>  
    );
  }
}

export default Header;