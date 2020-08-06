import React, { Component } from 'react';
import './About.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Habitrabbit from "../../assets/white-rabbit.png";
import { getCookie } from '../../services/Cookie';

console.log(Habitrabbit);

class Home extends React.Component {
    render() {
        return (
            <div class="body">
                <Header />
                <div class="home-page">
                    <div class="upper-home">
                        <p class="upper-home-text pb-4 pt-5">
                            About us
                        </p>
                        <div className="row row-cols-3">
                            <div className="col col-md order-1 pt-2">
                                {!getCookie('login')?
                                <button className="mx-auto" type="submit" id="get-started"><a href="/signup">Get Started</a></button>
                                :
                                <></>
                                }
                            </div>
                            <div className="col col-md mr-0 pr-0 order-0">
                                <img className="Habitrabbit" src={Habitrabbit} />
                            </div>
                            <div className="col col-md mr-0 pr-0 order-2"></div>
                        </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="yellow" d="M 0 200 Q 750 200 800 150 L 800 200 Z"/></svg> */}
                    </div>
                    <div class="lower-home">
                        <div className="lower-home-text ml-5">
                            <p class="lower-home-text pt-5">
                            Kelompok 9: <br></br><br></br>
                            Zachrandika Alif Syahreza (16519080)<br></br>
                            Rafidika Samekto (16519092)<br></br>
                            Dzaki Muhammad (16519098)<br></br>
                            Paul Marturia Sihombing (16519121)<br></br>
                            Dionisius Darryl Hermansyah (16519126)<br></br>
                            Jeremia Axel Bachtera (16519136)<br></br>
                            Anindha Catur Arifani (16519144)<br></br>
                            Jacelyn Felisha (16519145)<br></br>
                            Gilbert Christian Sinaga (16519147)<br></br>
                            Muhammad Vito Ibrahim (16519157)</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
  }
}

export default Home;