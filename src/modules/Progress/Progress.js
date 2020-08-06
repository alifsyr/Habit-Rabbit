import React, { Component } from "react";
import "./Progress.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { setCookie, getCookie } from "../../services/Cookie";

class Progress extends React.Component {
    render() {
        return(
            <>
            <Header/>
            <div className="progress-container">
            <h1>
                See your Progress here
            </h1>
            <table>
                <tr>
                    <th>
                        <div className="myProgress">
                            <div className="myBar">
                                Drink enough water
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="btn">
                            On Progress
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="myProgress">
                            <div className="myBar">
                                Workout for 10 minutes everyday
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="btn">
                            Finished
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <div className="myProgress">
                            <div className="myBar">
                                Make new friends
                            </div>
                        </div>
                    </th>
                    <th>
                        <input type="button" className="btn" value="Start"/>
                    </th>
                </tr>
            </table>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Progress;