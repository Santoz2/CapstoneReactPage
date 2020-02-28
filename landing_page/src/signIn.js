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
//import './templateStyles.css';

class SignInPage extends Component {
    render() {
        return (
            <div className="app">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />

                <title>Vision by The Dream Treeam</title>
                <style>

                </style>
                <main>
                    <section className="clear-section">
                        <div className="container">
                            <div className="d-flex justify-content-center h-100">
                                <div className="card">
                                    <div className="card-body">
                                        <h2>Join Vision</h2>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label htmlFor="first-name">First Name</label>
                                                    <input id="first-name" type="text" className="form-control" placeholder="First Name" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="last-name">Last Name</label>
                                                    <input id="last-name" type="text" className="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <label htmlFor="password">Password</label>
                                                    <input id="password" type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <label htmlFor="university">University</label>
                                                    <input id="university" type="university" className="form-control" placeholder="University" />
                                                </div>
                                            </div>

                                            {/* <div className="row align-items-center remember">
                                                    <input type="checkbox" />Remember Me
					                            </div>
                                                <div className="form-group">
                                                    
                                                    <input type="submit" value="Login" className="btn float-right login_btn" />
                                                </div> */}
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-danger mt-1">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <div className="card-footer">
                                            <div className="d-flex justify-content-center links">
                                                Don't have an account?<a href="#">Sign Up</a>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <a href="#">Forgot your password?</a>
                                            </div>
                                        </div> */}
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
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
        )
    }
}

export default SignInPage;
