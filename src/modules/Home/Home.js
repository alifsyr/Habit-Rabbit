import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Home.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { NavLink } from 'react-router-dom'

/*Images*/
import Habitrabbit from "../../assets/white-rabbit.png";
import HabRabProgressBar from '../../assets/ProgressBar.png';
import Infographic1 from  "../../assets/infographic1.jpg";
import Infographic2 from  "../../assets/infographic2.jpg";
import Infographic3 from  "../../assets/infographic3.jpg";

/*Services*/
import { getCookie } from '../../services/Cookie';

class Home extends React.Component {
    constructor(props){
        super(props);
    
        this.state={
          getStarted: false
            };
        }

    render() {
        return (
            <div class="body">
                <Header />
                <div class="home-page">
                    <div class="upper-home pt-5">
                        <p class="upper-home-text pb-4 pt-5">
                            Let's improve your good habits with Habit Rabbit !
                        </p>
                        <div className="row">
                            <div className="col col-md order-1 pt-2">
                                {!getCookie('login')?
                                <button className="mx-auto" type="submit" id="get-started"><a><NavLink
                                to="/signup"
                                className="nav-link"
                              >
                                Get Started
                              </NavLink></a></button>
                                :
                                <></>
                                }
                            </div>
                            <div className="col col-md ml-1 mr-0 pr-0 order-0">
                                <img className="Habitrabbit" src={Habitrabbit} />
                            </div>
                            <div className="col mr-0 pr-0 order-2"></div>
                        </div>
                    </div>
                    <div class="lower-home pt-5 row justify-content-center">
                        <div className="col-7 lower-home-text ml-5">
                            <p class="lower-home-text pt-5">Infographic about mental health awareness and benefits of making good habits</p>
                        </div>
                        <div className="col-sm-auto mr-5">
                            <img className="HabRabProgressBar" src={HabRabProgressBar} />
                        </div>
                    </div>
                    <div class="lower-home pt-5 row justify-content-end">
                        <div className="col-7 lower-home-text mr-5">
                        <p class="quote-right">“Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, <strong>YOU ARE NOT THE RAIN</strong>.” — Matt Haig</p>
                        </div>
                    </div>
                    <div className="infographic infographic-left justify-content-center">
                        <div className="info-content ml-5 ">
                            <img className="" src={Infographic1}/>
                        </div>
                    </div>
                    <div class="lower-home pt-5 row justify-content-between">
                        <div className="col-7 lower-home-text ml-5">
                        <p class="quote-left">“I found that with depression, one of the most important things you can realize is that <strong>you’re not alone</strong>. You’re not the first to go through it, you’re not gonna be the last to go through it,” — Dwayne Johnson</p>
                        </div>
                    </div>
                    <div className="infographic infographic-right justify-content-center">
                        <div className="info-content mr-5">
                            <img src={Infographic2}/>
                        </div>
                    </div>
                    <div class="lower-home pt-5 row justify-content-end">
                        <div className="col-7 lower-home-text mr-5">
                        <p class="quote-right">“<strong>Mental health</strong>…is not a destination, but a process. It’s about how you drive, not where you’re going.” – Noam Shpancer</p>
                        </div>
                    </div>
                    <div className="infographic infographic-left justify-content-center">
                        <div className="info-content ml-5">
                            <img src={Infographic3}/>
                        </div>
                    </div>
                    <div className="row pt-5 justify-content-center">
                        <small>
                            Bunny cartoon vector created by <a href="https://www.freepik.com/vectors/cartoon">Freepik</a>
                        </small>
                    </div>
                    <div className="row pt-5 justify-content-center">
                        <small>
                            Infographic created by <a href="https://www.seafarerswelfare.org/">SeafarerWelfare</a>, <a href="https://www.childrens.com/">Childrens</a>, <a href="https://www.dreamstime.com/">Dreamstime</a>
                        </small>
                    </div>
                </div>
                <Footer />
            </div>
        );
  }
}

export default Home;