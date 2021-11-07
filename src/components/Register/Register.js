import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">

            
            <div >
            <h2>Create Account</h2>
                <form onSubmit="">
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" placeholder="Enter Password" /><br />
                <input type="password" name="" id=""placeholder="Re-enter Password" />
                <br />

                <input type="submit" value="Create Account" />

                </form>
                <p>Already have an account? </p>
                <Link to="/login">Login</Link>
                
            </div>
        </div>
    );
};

export default Register;
