import React, { Component } from 'react';
import './Home.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

/*Images*/
import Habitrabbit from "../../assets/white-rabbit.png";
import HabRabProgressBar from '../../assets/ProgressBar.png';
import Infographic1 from  "../../assets/infographic1.jpg";
import Infographic2 from  "../../assets/infographic2.jpg";
import Infographic3 from  "../../assets/infographic3.jpg";

/*Services*/
import { getCookie } from '../../services/Cookie';

class Home extends React.Component {
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
                                <button className="mx-auto" type="submit" id="get-started"><a href="/signup">Get Started</a></button>
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
                    <div class="lower-home pt-5 row justify-content-between">
                        <div className="col-7 lower-home-text ml-5">
                            <p class="lower-home-text pt-5">Infographic about mental health awareness and benefits of making good habits</p>
                        </div>
                        <div className="col-sm-auto align-right mr-5">
                            <img className="HabRabProgressBar" src={HabRabProgressBar} />
                        </div>
                    </div>
                    <div class="lower-home pt-5 row justify-content-end">
                        <div className="col-7 lower-home-text ml-5">
                        <p class="quote-right pt-5">“Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, <strong>YOU ARE NOT THE RAIN</strong>.” — Matt Haig</p>
                        </div>
                    </div>
                    <div className="infographic-1 justify-content-start">
                        <div className="info-content ml-25 ">
                            <img src={Infographic1}/>
                        </div>
                    </div>
                    <div class="lower-home pt-5 row justify-content-between">
                        <div className="col-7 lower-home-text ml-5">
                        <p class="quote-left pt-5">“I found that with depression, one of the most important things you can realize is that <strong>you’re not alone</strong>. You’re not the first to go through it, you’re not gonna be the last to go through it,” — Dwayne Johnson</p>
                        </div>
                    </div>
                    <div className="infographic-2">
                        <div className="info-content">
                            <img src={Infographic2}/>
                        </div>
                    </div>
                    <div class="lower-home pt-5 row justify-content-between">
                        <div className="col-7 lower-home-text ml-5">
                        <p class="quote-right pt-5">“<strong>Mental health</strong>…is not a destination, but a process. It’s about how you drive, not where you’re going.” – Noam Shpancer</p>
                        </div>
                    </div>
                    <div className="infographic-1">
                        <div className="info-content">
                            <img src={Infographic3}/>
                        </div>
                    </div>
                    <div className="row pt-5 justify-content-center">
                        <small>
                            <a href="https://www.freepik.com/vectors/cartoon">Bunny cartoon vector created by Freepik</a>
                        </small>
                    </div>
                </div>
                <Footer />
            </div>
        );
  }
}

export default Home;