import React, { Component } from 'react';
import './Home.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Home extends React.Component {
    render() {
        return (
            <div class="body">
                <Header />
                <div class="home-page">
                    <div class="upper-home">
                        Let's improve your good habits with Habit Rabbit !
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="red" d="M 0 200 Q 750 200 800 150 L 800 200 Z"/></svg>
                    {/* Infographic about mental health awareness and benefits of making good habits */}
                </div>
                <Footer />
            </div>
        );
  }
}

export default Home;