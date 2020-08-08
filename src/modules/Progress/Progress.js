import React, { Component } from "react";
import "./Progress.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { setCookie, getCookie } from "../../services/Cookie";

import data from './challenges.json';

class Progress extends React.Component {
    showCountdown() {
        var date = new Date()
        date.setDate(date.getDate() + 1);

        return(
            <div>
                <h3>Your challenges will reset on : {date.getDate()}-{date.getMonth()}-{date.getFullYear()}  {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h3>
            </div>
        )
    }

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
        
        var randomChallenges = [];
		
		for(var j=0; j < MBTI.length; j++){
			for(var i = 0; i < data.length; i++) {
				var obj = data[i];
				if(obj.type == MBTI[j]) {
					for(var k=0; k < obj.challenge.length; k++){
						randomChallenges.push(obj.challenge[k]);
					}
				}
			}
		}
				
		console.log('random: '+randomChallenges)

        var selectedChallenges = [];

        while(selectedChallenges.length < 3) {
            var id = Math.floor(Math.random() * randomChallenges.length);

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
            <h1>{this.showCountdown()}</h1>
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