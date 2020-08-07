import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './ChooseMBTI.css';

import { Button } from "react-bootstrap";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { getCookie, setCookie } from "../../services/Cookie"; 

class ChooseMBTI extends React.Component {
    showMBTI() {
        return(
        <div className='choose-mbti'>
            <h1>
                Hi {getCookie("username")}, Welcome to Habit Rabbit!
            </h1>
            <h2>
                Choose your MBTI below here
            </h2>
                <form class="row1">
                    <input type="button" class="btn" value="INTP" onClick={()=>setCookie('mbti','INTP',2)} />
                    <input type="button" class="btn" value="INTJ" onClick={()=>setCookie('mbti','INTJ',2)} href='/home'/>
                    <input type="button" class="btn" value="INFJ" onClick={()=>setCookie('mbti','INFJ',2)} href='/home'/>
                    <input type="button" class="btn" value="INFP" onClick={()=>setCookie('mbti','INFP',2)} href='/home'/>
                    <input type="button" class="btn" value="ISTJ" onClick={()=>setCookie('mbti','ISTJ',2)} href='/home'/>
                    <input type="button" class="btn" value="ISFJ" onClick={()=>setCookie('mbti','ISFJ',2)} href='/home'/>
                    <input type="button" class="btn" value="ISTP" onClick={()=>setCookie('mbti','ISTP',2)} href='/home'/>
                    <input type="button" class="btn" value="ISFP" onClick={()=>setCookie('mbti','ISFP',2)} href='/home'/>
                </form>
                <form class="row2">
                    <input type="button" class="btn" value="ENTJ" onClick={()=>setCookie('mbti','ENTJ',2)} href='/home'/>
                    <input type="button" class="btn" value="ENTP" onClick={()=>setCookie('mbti','ENTP',2)} href='/home'/>
                    <input type="button" class="btn" value="ENFJ" onClick={()=>setCookie('mbti','ENFJ',2)} href='/home'/>
                    <input type="button" class="btn" value="ENFP" onClick={()=>setCookie('mbti','ENFP',2)} href='/home'/>
                    <input type="button" class="btn" value="ESTJ" onClick={()=>setCookie('mbti','ESTJ',2)} href='/home'/>
                    <input type="button" class="btn" value="ESFJ" onClick={()=>setCookie('mbti','ESFJ',2)} href='/home'/>
                    <input type="button" class="btn" value="ESTP" onClick={()=>setCookie('mbti','ESTP',2)} href='/home'/>
                    <input type="button" class="btn" value="ESFP" onClick={()=>setCookie('mbti','ESFP',2)} href='/home'/>
                </form>
                <Button variant='success' className='submit-button' href="/home" type="submit">Submit</Button> 
                <p>Don't know about your MBTI? <a href="https://www.16personalities.com/free-personality-test">Take a test here</a></p>
        </div>
        )
    }

    render(){
        if (getCookie('mbti')) return <Redirect to='/' />

        return(
            <>
            <Header/>
                {!getCookie('mbti')?
                    this.showMBTI()
                    :
                    <Redirect to='/' />
                }
            <Footer/>
            </>
        )
    }
}

export default ChooseMBTI;