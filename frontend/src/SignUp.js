//---------To-Do---------
//1.Change the Font
//2.Send requests to the backend
//3.Check proper alignment
//4.Make the Continue with Google a button
//5.Handle the form
//6.Implment the showPassword function
//-----------------------

import { Component, createRef } from "react";
import logo from './assets/logo.jpg';
import Recaptcha from 'react-google-recaptcha';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.recaptchaRef = createRef();
        console.log("key = ", process.env.REACT_APP_KEY)
    } 

    showPassword = () => {
        console.log("Password");
    };

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="card" style={{ width: "400px", height: "800px", border: "None"}}>
                    <img src={logo} className="p-3 mx-auto d-block img-fluid w-75"></img>
                    <h3 className="p-3 text-center fw-bold">Create an account</h3>
                    
                    <form>
                        <div className="mb-3">
                            <label className="fw-bold form-label">Name</label>
                            <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}> 
                                <input type="text" id="username" className="form-control border-0"></input>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="fw-bold form-label">Enter email</label>
                            <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}> 
                                <input type="email" id="email" className="form-control border-0"></input>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="fw-bold form-label">Password</label>
                            <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}>
                                <input type="password" id="password" className="form-control border-0"></input>
                                <button 
                                    className="btn" 
                                    style={{ 
                                        border: "None" 
                                    }}
                                    onClick={this.showPassword}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="text-muted pt-3">
                            By continuing, you agree to our <span className="text-success">terms and services.</span>
                        </div>

                        <Recaptcha
                            ref={this.recaptchaRef}
                            sitekey={process.env.REACT_APP_KEY}
                        />
                        
                        <div className="mb-3" style={{ height: "47px" }} id="Submit">
                            <button className="border-0 w-100 text-white fw-bold" style={{ borderRadius: "5px", height: "100%", backgroundColor: "#5d12d2"}}>
                               Sign up 
                            </button>
                        </div>
                    </form>

                    <div className="d-flex align-items-center justify-content-center my-0" style={{ height: "80px" }}>
                        <hr className="flex-grow-1 opacity-50 border-secondary" />
                        <span className="h-50 px-3 py-2 fw-bold bg-light text-secondary">or sign up with</span>
                        <hr className="flex-grow-1 opacity-50 border-secondary" />
                    </div>

                    <div className="d-flex align-items-center justify-content-center mb-3 bg-secondary" style={{ height: "50px", borderRadius: "5px" }}>
                        <img></img>
                        <span>Continue with Google</span>
                    </div>

                    <div>
                        Already have an account? <span className="text-success">Sign in here</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
