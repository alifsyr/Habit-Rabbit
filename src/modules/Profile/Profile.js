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
                <img src={ProfilePicture}/>
                <h1>
                    Hello, {getCookie('username')}
                </h1>
                <h1>
                    Golden Badge <div className='logo'><img src={Golden}/></div>
                </h1>
            </div>
            <div class="friends" >
                <h1>
                    Friends
                </h1>
                <h2>
                    My Friends
                </h2>
                <input className="search" type="search" placeholder="Search..." aria-label="Search" />
            </div>
            <div className='logo'>
                <table>
                    <tr>
                        <img src={Golden}/>
                        <th>
                            John Doe
                        </th>
                        <th>
                            <input type="button" class="message" value="Send a message"/>
                        </th>
                        <th>
                            Already your friend
                        </th>
                    </tr>
                    <tr>
                        <img src={Platinum}/>
                        <th>
                            Jane Doe
                        </th>
                        <th>
                            <input type="button" class="message" value="Send a message"/>
                        </th>
                        <th>
                            Already your friend
                        </th>
                    </tr>
                    <tr>
                        <img src={Golden}/>
                        <th>
                            Anonymous
                        </th>
                        <th>
                            Private Account
                        </th>
                        <th>
                            <input type="button" class="add" value="Add as a friend"/>
                        </th>
                    </tr>
                </table>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Profile;