import React, { Component } from 'react';
import './NotFound.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class NotFound extends React.Component {
    render() {
        return (
            <div className="notfound-background">
            <Header />
                <div className="notfound-box">
                    <h3>Halaman tidak ditemukan</h3>
                    <h1>:(</h1>
                </div>
            <Footer />
            </div>
        );
  }
}

export default NotFound;