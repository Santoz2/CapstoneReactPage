import React, { Component } from 'react';
/*import logo from './logo.svg';
import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css";
import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";*/
import './App.css';
import KevinBackGround from "./kevBanner.jpg";
//import Valley from "./valley.jpg";
import Screenshot from "./screenshot.jpg";
import Screenshot2 from "./screenshot2.jpg";
import zaijen from "./dev_pics/zaijen.jpg";
import kevin from "./dev_pics/kevin.jpg";
import howard from "./dev_pics/howard.jpg";
import kishore from "./dev_pics/kishore.jpg";
import cliffs from "./cliffs.jpg";
import lake from "./frozen_lake.jpg";

import LandingPage from "./landingPage.js";
import SignInPage from "./signIn.js";

function App() {
    return (
        <div className="parallax" style={{ backgroundImage: KevinBackGround }}>
            <AppHeader></AppHeader>
            <SignInPage></SignInPage>
            <AppFooter></AppFooter>
        </div>
    );
}

class AppHeader extends Component {
    render() {
        return (
            <header>
                <div id="top-banner" className="navbar navbar-expand-md navbar-dark sticky-top">
                    <div className="container-fluid">
                        <h1 className="navbar-brand"><strong><a className="text-white" href="./index.html">Vision</a></strong> by The
                                Dream Treeam</h1>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <nav className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto mr-2">
                                <li className="nav-item active">
                                    <a className="nav-link" href="./index.html">Home <span className="sr-only">Current</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./index.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./index.html">Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

class AppFooter extends Component {
    render() {
        return(
            <footer id="footer">
                <div className="container">
                    <ul className="icons">
                        <li><a href="./index.html" className="icon fa-facebook"><span className="sr-only">Facebook</span></a></li>
                        <li><a href="./index.html" className="icon fa-twitter"><span className="sr-only">Twitter</span></a></li>
                        <li><a href="./index.html" className="icon fa-instagram"><span className="sr-only">Instagram</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; The Dream Treeam</li>
                        <li>Landscape Photos by Kevin</li>
                        <li>Original Landing Page Design: <a href="http://templated.co">TEMPLATED</a></li>
                    </ul>
                    <p>This project is a part of the <a href="https://ischool.uw.edu/capstone">Capstone Project</a> course at the University of Washington Information School</p>
                    {/*<li>Images: <a href="http://unsplash.com">Unsplash</a></li>*/}
                </div>
            </footer>
        );
    }
}

export default App;
