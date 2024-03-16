import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)
    const onButtonClick = () => {
        // Set initial error values to empty
        setEmailError("");
        setPasswordError("");
        setError("");
        
        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email");
            return;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email");
            return;
        }

        if ("" === password) {
            setPasswordError("Please enter a password");
            return;
        }

        if (password.length < 8) {
            setPasswordError("The password must be 8 characters or longer");
            return;
        }
        setUser({email,password})
        // Check if email has an account associated with it
        checkAccountExists();
        setEmail("");
        setPassword("");
    }

    // Call the server API to check if the given email ID already exists
    const checkAccountExists = () => {
        fetch("http://localhost:3080/check-account", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email})
        })
        .then(r => r.json())
        .then(r => {
            if (r.userExists) {
                // If email exists, attempt to login
                logIn();
            } else {
                // If email does not exist, show an error
                setError("An account does not exist with this email address.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

   // Log in a user using email and password
const logIn = () => {
    fetch("http://localhost:3080/auth", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({email, password})
    })
    .then(r => r.json())
    .then(r => {
        if ('success' === r.message) {
            // If login is successful, you may want to perform additional checks
            // such as checking if the password is correct
            if (r.passwordCorrect) {
                // Password is correct, proceed with login
                localStorage.setItem("user", JSON.stringify({email, token: r.token}));
                setLoggedIn(true);
                setEmail(email);
                navigate("/");
            } else {
                // Password is incorrect, show an error
                setError("Incorrect password");
            }
        } else {
            // Show an error for other types of authentication failure
            setError("Wrong email or password");
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


    const buttons = [
        <button key="google" className="border border-gray-300 text-gray-900 py-2 px-4 rounded-md w-full mb-3 hover:text-gray-700 hover:border-gray-400 focus:outline-none focus:ring focus:border-blue-300">Sign in With Google</button>,
        <button key="facebook" className="border border-gray-300 text-gray-900 py-2 px-4 rounded-md w-full mb-3 hover:text-gray-700 hover:border-gray-400 focus:outline-none focus:ring focus:border-blue-300">Sign in With Facebook</button>,
        <button key="x" className="border border-gray-300 text-gray-900 py-2 px-4 rounded-md w-full mb-3 hover:text-gray-700 hover:border-gray-400 focus:outline-none focus:ring focus:border-blue-300">Sign in With X</button>
    ];

    return (
        <div className="bg-red-100 p-10 rounded-lg w-1/2 mx-auto my-5 ">
            <h3 className="text-3xl font-bold text-black pb-5">Sign in</h3>
            <div className="grid gap-1">
                {buttons}
            </div>
            <h6 className="text-xl text-gray-500 py-5 pl-5">or</h6>
            <div className="border border-gray-300 rounded-md p-5">
                <h6 className="text-xl text-black text-center mb-5">Sign in with email</h6>
                <div className="space-y-4">
                    {error && <p className="text-red-500">{error}</p>}
                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                    <div className="flex justify-between">
                        <Link to="/" className='text-blue-600 hover:text-blue-400'>Forgot password?</Link>
                        <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300" onClick={onButtonClick}><Link to='/'>Sign In</Link></button>
                    </div>
                    <Link to="/sign-up-1" className='text-blue-600 hover:text-blue-400'>Don't have an account? Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
