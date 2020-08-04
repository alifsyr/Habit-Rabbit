import React, { Component } from 'react';
import './Authentication.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Authentication extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div class="auth">
                    <div class="auth-box">
                        <form action="#" method="POST">
                            <div class="form-group">
                                <label htmlFor="nickname" class="form-control-label">What's your nickname?</label>
                                <input id="nickname"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div class="form-group">
                                <label htmlFor="username" class="form-control-label">Create a username</label>
                                <input id="username"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div class="form-group">
                                <label htmlFor="password" class="form-control-label">Create a password</label>
                                <input id="password"
                                    type="text"
                                    name="name"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Authentication;