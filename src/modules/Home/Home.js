import React, { Component } from 'react';
import './Home.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Habitrabbit from "../../assets/white-rabbit.png";
import { getCookie } from '../../services/Cookie';
import HabRabProgressBar from '../../assets/ProgressBar.png';

console.log(Habitrabbit);

class Home extends React.Component {
    render() {
        return (
            <div class="body">
                <Header />
                <div class="home-page">
                    <div class="upper-home">
                        <p class="upper-home-text pb-4 pt-5">
                            Let's improve your good habits with Habit Rabbit !
                        </p>
                        <div className="row row-cols-3">
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
                            <div className="col col-md mr-0 pr-0 order-2"></div>
                        </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="yellow" d="M 0 200 Q 750 200 800 150 L 800 200 Z"/></svg> */}
                    </div>
                    <div class="lower-home pt-5 row justify-content-between">
                        <div className="col-7 lower-home-text ml-5">
                            <p class="lower-home-text pt-5">Infographic about mental health awareness and benefits of making good habits</p>
                        </div>
                        <div className="col-sm-auto align-right mr-5">
                            <img className="HabRabProgressBar" src={HabRabProgressBar} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <small>
                            <a href="https://www.freepik.com/vectors/cartoon">Bunny cartoon vector created by freepik - www.freepik.com</a>
                        </small>
                    </div>
                </div>
                <Footer />
            </div>
        );
  }
}

export default Home;