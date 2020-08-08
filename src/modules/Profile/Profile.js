import React, { Component } from "react";
import "./Profile.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { setCookie, getCookie } from "../../services/Cookie";

import ProfilePicture from '../../assets/profile-picture.png';
import Golden from '../../assets/golden.png';
import Platinum from '../../assets/platinum.png';

class Profile extends React.Component {
    render() {
        return (
            <> 
            <Header/>  
            <div class="profile" >
                <img className="profile-img mt-4" src={ProfilePicture}/>
                <div className="h1">
                    Hello, {getCookie('username')}
                </div>
                <div className="h1">
                    <img className="profile-logo m-4" src={Golden}/>Golden Badge 
                </div>
            </div>
            <div className="friends-section p-5">
                <div class="friends-header">
                    <div className="friends-title h1 mb-4">
                        Friends
                    </div>
                    <div className="friends-subtitle h5 justify-content-between">
                        <div className="friends-desc my-2">My Friends</div>
                        <input className="search" type="search" placeholder="Search..." aria-label="Search" />
                    </div>
                </div>
                <div className='friends mt-5 mx-lg-auto'>
                    <div className="friends-table">
                        <div className="row">
                            <img className="col-0 logo" src={Golden}/>
                            <div className="col w-auto btn-friends btn-name">
                                <div className="my-1">John Doe</div>
                            </div>
                            <div className="col col-sm-3 btn-friends">
                                <div className="my-1"><input type="button" class="message" value="Send a message"/></div>
                            </div>
                            <div className="col col-md-3 btn-friends">
                                <div className="my-1">Already your friend</div>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-0 logo" src={Platinum}/>
                            <div className="col w-auto btn-friends btn-name">
                                <div className="my-1">Jane Doe</div>
                            </div>
                            <div className="col col-sm-3 btn-friends">
                                <div className="my-1"><input type="button" class="message" value="Send a message"/></div>
                            </div>
                            <div className="col col-md-3 btn-friends">
                                <div className="my-1">Already your friend</div>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-0 logo" src={Golden}/>
                            <div className="col w-auto btn-friends btn-name">
                                <div className="my-1">Anonymous</div>
                            </div>
                            <div className="col col-sm-3 btn-friends">
                                <div className="my-1">Private Account</div>
                            </div>
                            <div className="col col-md-3 btn-friends">
                                <div className="my-1"><input type="button" class="add" value="Add as a friend"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Profile;