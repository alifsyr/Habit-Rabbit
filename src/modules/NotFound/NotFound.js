import React, { Component } from 'react';
import './NotFound.css';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class NotFound extends React.Component {
    render() {
        return (
            <>
            <Header />
            <div className="content">
                <div className="notfound-box mx-auto my-auto">
                    <h3>Halaman tidak ditemukan</h3>
                    <h1>:(</h1>
                </div>
            </div>
            <Footer />
            </>
        );
  }
}

export default NotFound;