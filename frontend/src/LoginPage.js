//---------To-Do---------
// 1.Change the font to a desired custom font.
// 2. Send requests to the backend with email and password on form submission.
// 3. Ensure proper alignment of form fields, buttons, and images.
// 4. Make "Continue with Google" a button, styled with a Google logo.
// 5. Handle the form with validation and prevent default form submission.
// 6. Implement the showPassword function to toggle password visibility.


import { Component, createRef } from "react";
import logo from './assets/logo.png';  // Ensure this image exists in your project
import Recaptcha from 'react-google-recaptcha';
import SignUp from './SignUp';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.recaptchaRef = createRef();
    }

    showPassword = (e) => {
        e.preventDefault();
        const passwordInput = document.getElementById("password");
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };

        fetch('https://your-backend-endpoint.com/login', {  // Update this URL with your backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (redirect to dashboard or show success message)
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (show error message)
        });
    };

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100 bg-white">
                <div className="d-flex card px-0 py-3 border-0 shadow-none" style={{ width: "400px", height: "500px" }}>
                    <img src={logo} className="p-3 mx-auto d-block img-fluid w-75" alt="Logo" />
                    <h2 className="text-center fw-bold" style={{ fontSize: "25px" }}>Login</h2>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label className="fw-bold form-label">Email</label>
                            <input type="email" id="email" className="form-control border-0" required />
                        </div>

                        <div className="mb-3">
                            <label className="fw-bold form-label">Password</label>
                            <div className="input-group input-group-lg border border-dark" style={{ borderRadius: "5px" }}>
                                <input type="password" id="password" className="form-control border-0" required />
                                <button 
                                    className="m-1"
                                    style={{ width: "48px", height: "38px", backgroundColor: "white", border: "None" }}
                                    onClick={this.showPassword}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="d-flex align-items-center text-muted py-2">
                            By continuing, you agree to our <span className="text-success px-1">terms and services.</span>
                        </div>

                        <Recaptcha
                            className="py-2"
                            ref={this.recaptchaRef}
                            sitekey={process.env.REACT_APP_KEY}
                        />
                        
                        <div className="mb-3" style={{ height: "47px" }}>
                            <button className="border-0 w-100 text-white fw-bold" style={{ borderRadius: "5px", height: "100%", backgroundColor: "#5d12d2" }}>
                               Login 
                            </button>
                        </div>
                    </form>

                    <div className="d-flex align-items-center justify-content-center my-0" style={{ height: "80px" }}>
                        <hr className="flex-grow-1 opacity-50 border-secondary" />
                        <span className="h-50 fw-bold bg-light text-secondary">or login with</span>
                        <hr className="flex-grow-1 opacity-50 border-secondary" />
                    </div>

                    <div className="d-flex align-items-center justify-content-center bg-light shadow-sm rounded" style={{ height: "50px" }}>
                        <button className="d-flex align-items-center justify-content-center bg-white text-dark border-0 w-100" 
                                style={{ borderRadius: "5px", padding: "12px" }}>
                            <img src="google-logo.png" alt="Google" style={{ width: "30px", marginRight: "10px" }} />
                            <span>Continue with Google</span>
                        </button>
                    </div>

                    <div className="py-3">
                        Don't have an account? <span className="text-success">Sign up here</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
