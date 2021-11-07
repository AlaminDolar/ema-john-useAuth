import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css";

const Login = () => {
    const{signInUsingGoogle}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLog =()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
           
        })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john?</p>
                <Link to="/register">Create Account</Link>
                <p>----or----</p>
                <button onClick={handleGoogleLog} className="text-danger">Google Login</button>
            </div>
        </div>
    );
};

export default Login;