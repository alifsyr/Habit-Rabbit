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
                        <p class="upper-home-text pb-4 pt-3">
                            <h1>About us</h1>
                            Habbit Rabit, a website to assist you in solving mental health problems with good and easy habits
                            <br />
                            Made for SPARTA HMIF 2019's Milestone assignment

                        </p>
                        <div className="row row-cols-3">
                            <div className="col col-md mr-0 pr-0 order-0">
                                <img className="Habitrabbit" src={Habitrabbit} />
                            </div>
                            <div className="col col-md mr-0 pr-0 order-2"></div>
                        </div>
                    </div>
                    <div class="lower-home">
                        <div className="lower-home-text ml-5">
                            <p class="lower-home-text pt-5">
                            Kelompok 9: <br></br>
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