import React, { Component } from "react";
import "./Progress.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { setCookie, getCookie } from "../../services/Cookie";

import data from './challenges.json';

class Progress extends React.Component {
    getMBTI() {
        const MBTI = []
        for (let c of getCookie('mbti')){
            MBTI.push(c)
        }
        console.log(MBTI)
        return MBTI;
    }

    getRandomChallenges() {
        const MBTI = this.getMBTI();
        
        var randomChallenges = []

        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            
            if(obj.type == MBTI[0]){
                randomChallenges = obj.challenge
            }
            if(obj.type == MBTI[1]){
                randomChallenges.concat(obj.challenge)
            }
            if(obj.type == MBTI[2]){
                randomChallenges.concat(obj.challenge)
            }
            if(obj.type == MBTI[4]){
                randomChallenges.concat(obj.challenge)
            }
        }

        var selectedChallenges = [];

        while(selectedChallenges.length < 3) {
            var id = Math.floor(Math.random() * obj.challenge.length);

            if(!selectedChallenges.includes(randomChallenges[id])){
            selectedChallenges.push(randomChallenges[id])
            }
        }
        
        return (selectedChallenges)
    }

    render() {
        const challenges = this.getRandomChallenges();

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
                            <div className="myBar1">
                                {challenges[0]}
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
                            <div className="myBar2">
                                {challenges[1]}
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
                            <div className="myBar3">
                                {challenges[2]}
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