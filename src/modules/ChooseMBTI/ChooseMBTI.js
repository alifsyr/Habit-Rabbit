import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './ChooseMBTI.css';

import { Button } from "react-bootstrap";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { getCookie, setCookie } from "../../services/Cookie"; 

class ChooseMBTI extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirectHome: false
        };
      }

    showMBTI() {
        return(
        <div className='choose-mbti'>
            <div className="mbti-text h1 pb-4">
                Hi {getCookie("username")}, Welcome to Habit Rabbit!
            </div>
            <div className="mbti-text h5 pb-4">
                Choose your MBTI below here
            </div>
                <form class="row1">
                    <input type="button" class="btn-circle m-2" value="INTP" onClick={()=>setCookie('mbti','INTP',2)} />
                    <input type="button" class="btn-circle m-2" value="INFJ" onClick={()=>setCookie('mbti','INFJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="INFP" onClick={()=>setCookie('mbti','INFP',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ISTJ" onClick={()=>setCookie('mbti','ISTJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="INTJ" onClick={()=>setCookie('mbti','INTJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ISFJ" onClick={()=>setCookie('mbti','ISFJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ISTP" onClick={()=>setCookie('mbti','ISTP',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ISFP" onClick={()=>setCookie('mbti','ISFP',2)} href='/'/>
                </form>
                <form class="row2">
                    <input type="button" class="btn-circle m-2" value="ENTJ" onClick={()=>setCookie('mbti','ENTJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ENTP" onClick={()=>setCookie('mbti','ENTP',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ENFJ" onClick={()=>setCookie('mbti','ENFJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ENFP" onClick={()=>setCookie('mbti','ENFP',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ESTJ" onClick={()=>setCookie('mbti','ESTJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ESFJ" onClick={()=>setCookie('mbti','ESFJ',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ESTP" onClick={()=>setCookie('mbti','ESTP',2)} href='/'/>
                    <input type="button" class="btn-circle m-2" value="ESFP" onClick={()=>setCookie('mbti','ESFP',2)} href='/'/>
                </form>
                <Button variant='success' className='submit-button mt-5' onClick={()=>this.setState({redirectHome:true})} type="submit">Submit</Button> 
                <div className="mbti-text h6 mt-3">
                    Don't know about your MBTI? <a href="https://www.16personalities.com/free-personality-test">Take a test here</a>
                </div>
        </div>
        )
    }

    render(){
        if (getCookie('mbti')) return <Redirect to='/' />
        if (this.state.redirectHome) return <Redirect to='/' />

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

    // var Button = React.createClass({
    //     getInitialState: function() {
    //       return {
    //         bgColor: 'red'
    //       }
          
    //     },
        
    //     handleClick: function() {
    //       this.setState({
    //         bgColor: 'blue'
    //       })
    //     },
        
    //     render : function() {
    //       return (
    //         <div>
    //           <button 
    //             onClick={this.handleClick} 
    //             style={{backgroundColor:this.state.bgColor}}>Button</button>
    //         </div>
    //       )
    //     }
    // });
}

export default ChooseMBTI;