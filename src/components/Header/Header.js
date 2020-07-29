import React, { Component } from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state={
      login: false
        }
    }

    render() {
        return (
            <div class="navbar"> 
                <ul class="navbar-left">
                <li class="nav-item">
                    <a href="#" class="navbar-button pl-3">Habit Rabbit</a>
                </li>
                </ul>
                <ul class="navbar-right">
                <li class="nav-item">
                    <a href="/home" class="navbar-button">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/about" class="navbar-button">About</a>
                </li>
                <li class="nav-item">
                    <a href="/signin" class="navbar-button">Sign In</a>
                </li>
                </ul>
            </div>  
    );
  }
}

export default Header;