import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../configuration/firebase';
import './LogIn.css';

const LogIn = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/broker');
        } catch (error) {
            console.error('Error signing in:', error.message);
            setErrorMessage(error.message);
        }
    };

    return(
        <div className="login-side">
            <div className="my-form__wrapper">
                <div className="login-welcome-row">
                    <h1>Welcome back &#x1F44F;</h1>
                    <p>Please enter your details!</p>
                </div>
                <form className="my-form" onSubmit={handleSubmit}>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="socials-row">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" title="Use Google">
                            <img src= 'https://flooranthropy.com/wp-content/uploads/2019/11/google-logo-png-open-2000.png' alt="Google"/>
                            Log in with Google
                        </a>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" title="Use Apple">
                            <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="Apple" />
                            Log in with Apple
                        </a>
                    </div>
                    <div className="divider">
                        <div className="divider-line"></div>
                        Or
                        <div className="divider-line"></div>
                    </div>
                    <div className="text-field">
                        <label form="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />

                    </div>
                    <div className="text-field">
                        <label form="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            title="Minimum 6 characters at
                                                least 1 Alphabet and 1 Number"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                            required
                        />
                    </div>
                    <input type="submit" className="my-form__button" value="Login"/>
                    <div className="my-form__actions">
                        <div className="my-form__row">
                            <span>Did you forget your password?</span>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" title="Reset Password">
                                Reset Password
                            </a>
                        </div>
                        <div className="my-form__signup">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" title="Create Account">
                                Create Account
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
