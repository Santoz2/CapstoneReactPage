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

class LandingPage extends Component {
    render(){
        return(
        <div className="app">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />

            <title>Vision by The Dream Treeam</title>
            <div className="parallax" style={{ backgroundImage: KevinBackGround }}>
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
                <main>
                    <section className="clear-section">
                        <h2>Empowering the Environment, Together</h2>
                        <p>Build a community of climate enthusiasts, <br /> challenge your friends, and create change.
            </p>
                        <button type="button" className="btn btn-danger">Join Our Vision</button>
                    </section>

                    <section className="one">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="text-dark">About Vision</h2>
                                    <p className="sub-description">
                                        The International Platform Connecting YOU to Others Around the World... See a brighter
                                        future with VISION!
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        Here at VISION we see the hope for a greener tomorrow. However… to reach this future we need
                                        your help. There is no Earth 2. If our environmental
                                        conditions continue to decline as they have been, there will be no going back. Together we
                                        can
                                        all join one VISION to guide our communities to a
                                        future in which the Earth and people live hand in hand with sustainability at the core.
                        </p>
                                    <p>
                                        With VISION join a community of others who want to make small changes in their everyday
                                        lives to
                                        help save our planet. Complete goals, join communities,
                                        and work together to inspire change. The VISION Movement seeks to help show the world that
                                        when
                                        working together, people have the potential to a million
                                        little drops in the bucket into a flood of change. We will be the difference we want to see
                                        in
                                        this world. The only question is -- do you want to help
                                        VISION see this future?
                        </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="two clear-section">
                        <h2>The Problem</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Our World is Hurting</h3>
                                <p>Climate Change is no longer debatable.<br />
                                    The world is dying, and people know it.<br />
                                    There is so much beauty that we stand to lose.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src={lake} alt="A lake covered in snow" className="screenshots"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={cliffs} alt="Green cliffs on the water" className="screenshots"></img>
                            </div>
                            <div className="col-md-6">
                                <h3>You Are Stronger Than You Know</h3>
                                <p>What people do not know is their own ability.<br />
                                    Too often, we believe we can not make a difference. <br />
                                    With Vision, we aim to show you just how impactful <br />
                                    you are, and how working together can save our plant.
                                </p>
                            </div>
                        </div>
                        <h2>The Solution</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Solution Example 1</h3>
                                <p>Here's a first screenshot of our solution, a website goal tracker with global features</p>
                            </div>
                            <div className="col-md-6">
                                <img src={Screenshot} alt="A screenshot of the landing page" className="screenshots"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={Screenshot2} alt="A second screenshot of the landing page" className="screenshots"></img>
                            </div>
                            <div className="col-md-6">
                                <h3>Solution Example 2</h3>
                                <p>Here's a second screenshot of our solution, farther in</p>
                            </div>
                        </div>
                    </section>

                    <section className="one">
                        <div className="container">
                            <h2 className="text-dark">Vision's Developers</h2>
                            <div className="row">
                                <div className="col-md-3 profile-container">

                                    <img src={zaijen} alt="Zaijen Santos" />
                                    <p className="sub-description">
                                        Zaijen <br /> Santos
                                    </p>

                                </div>
                                <div className="col-md-3 profile-container">
                                    <img src={kevin} alt="Kevin Jerauld" />
                                    <p className="sub-description">
                                        Kevin <br /> Jerauld
                                    </p>
                                </div>
                                <div className="col-md-3 profile-container">
                                    <img src={howard} alt="Howard Pu" />
                                    <p className="sub-description">
                                        Howard <br /> Pu
                                    </p>
                                </div>
                                <div className="col-md-3 profile-container">
                                    <img src={kishore} alt="Kishore Vasan" />
                                    <p className="sub-description">
                                        Kishore <br /> Vasan
                                    </p>
                                </div>
                            </div>
                            <h2 className="text-dark">Have any questions?</h2>
                            <p>Feel free to contact us at airtightspring@gmail.com</p>
                        </div>
                    </section>


                </main>

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
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                    crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                    crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                    crossOrigin="anonymous"></script>
            </div>

        </div>
        )
    }
}

export default LandingPage;
