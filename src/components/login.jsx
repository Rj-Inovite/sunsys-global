import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; 
import './login.css'; 

// --- Global Data ---
const countries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IN', name: 'India' },
    { code: 'DE', name: 'Germany' },
    { code: 'AU', name: 'Australia' },
    // Add more countries as needed
];

const LoginPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        country: '',
    });
    const [message, setMessage] = useState('');
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const formBoxRef = useRef(null);

    // Effect to handle mouse movement for the highlight effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Function to switch between Login and Register views
    const switchMode = (e) => {
        e.preventDefault();
        setIsRegistering(prev => !prev);
        setMessage('');
        // Focus the relevant form panel content after transition starts
        setTimeout(() => {
            const focusElement = isRegistering ? 
                formBoxRef.current.querySelector('.login-panel .form-content') :
                formBoxRef.current.querySelector('.register-panel .form-content');
            if (focusElement) {
                focusElement.focus();
            }
        }, 500); // 500ms delay to match part of the CSS transition time
    };

    // Handler for all input changes
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData(prev => ({ ...prev, [name]: value }));
    };

    // Handler for form submission
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setMessage('Attempting login...');
        console.log('Login Data:', loginData);
        // Simulate API call success/failure
        setTimeout(() => {
            setMessage('Login successful! Redirecting...');
        }, 1000);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (registerData.password !== registerData.confirmPassword) {
            setMessage('Error: Passwords do not match!');
            return;
        }

        setMessage('Processing registration...');
        console.log('Registration Data:', registerData);
        
        // Simulate API call success
        setTimeout(() => {
            setMessage('Your response has been recorded.');
            setRegisterData({ // Clear form after success
                name: '', email: '', password: '', confirmPassword: '', phoneNumber: '', country: ''
            });
            // Do not switch to login mode, stay on register page
        }, 1500);
    };

    return (
        <div className="main-container">
            {/* Dynamic Cursor Highlight - Apply dynamic transform style */}
            <div
                className="highlight-effect"
                style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
            ></div>

            {/* Main Form Box Container */}
            <div ref={formBoxRef} className={`form-box-container ${isRegistering ? 'register-mode' : 'login-mode'}`}>

                {/* --- Login Form Panel --- */}
                <div 
                    className="form-panel login-panel" 
                    aria-hidden={isRegistering} 
                    tabIndex={isRegistering ? -1 : 0}
                >
                    {/* NEW WRAPPER for the animated border */}
                    <div className="sparkle-border-wrapper">
                        <div className="form-content" role="form" tabIndex={0}>
                            <h2 className="panel-title">Sign In to Your Global Account</h2>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={loginData.email}
                                        onChange={handleLoginChange}
                                        placeholder="Business Email"
                                        required
                                        autoComplete="username"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        name="password"
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        placeholder="Password"
                                        required
                                        autoComplete="current-password"
                                    />
                                </div>
                                <motion.button 
                                    type="submit" 
                                    className="action-button"
                                    whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(0, 224, 255, 0.8)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Login
                                </motion.button>
                            </form>
                            <p className="switch-text">
                                Don't have an account?{' '}
                                <a href="#register" onClick={switchMode}>
                                    Register Now
                                </a>
                            </p>
                            {message && !isRegistering && <p className="status-message">{message}</p>}
                        </div>
                    </div>
                </div>

                {/* --- Registration Form Panel --- */}
                <div 
                    className="form-panel register-panel" 
                    aria-hidden={!isRegistering} 
                    tabIndex={!isRegistering ? -1 : 0}
                >
                    {/* NEW WRAPPER for the animated border */}
                    <div className="sparkle-border-wrapper">
                        <div className="form-content" role="form" tabIndex={0}>
                            {message && isRegistering && <p className="status-message success-message">{message}</p>}
                            <h2 className="panel-title">Join SUNSYS Global Network</h2>
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={registerData.name} 
                                        onChange={handleRegisterChange} 
                                        placeholder="Full Name / Company Contact" 
                                        required 
                                        autoComplete="name"
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={registerData.email} 
                                        onChange={handleRegisterChange} 
                                        placeholder="Business Email" 
                                        required 
                                        autoComplete="email"
                                    />
                                </div>
                                <div className="input-group input-group-half">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={registerData.password} 
                                        onChange={handleRegisterChange} 
                                        placeholder="Password" 
                                        required 
                                        autoComplete="new-password"
                                    />
                                </div>
                                <div className="input-group input-group-half">
                                    <input 
                                        type="password" 
                                        name="confirmPassword" 
                                        value={registerData.confirmPassword} 
                                        onChange={handleRegisterChange} 
                                        placeholder="Confirm Password" 
                                        required 
                                        autoComplete="new-password"
                                    />
                                </div>
                                <div className="input-group">
                                    <input 
                                        type="tel" 
                                        name="phoneNumber" 
                                        value={registerData.phoneNumber} 
                                        onChange={handleRegisterChange} 
                                        placeholder="Phone Number (e.g., +1 555 123 4567)" 
                                        required 
                                        autoComplete="tel"
                                    />
                                </div>
                                <div className="input-group">
                                    <select 
                                        name="country" 
                                        value={registerData.country} 
                                        onChange={handleRegisterChange} 
                                        required
                                    >
                                        <option value="" disabled>Select Primary Location</option>
                                        {countries.map(c => (
                                            <option key={c.code} value={c.code}>{c.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <motion.button 
                                    type="submit" 
                                    className="action-button"
                                    whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(0, 224, 255, 0.8)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Register Account
                                </motion.button>
                            </form>
                            <p className="switch-text">
                                Already have an account?{' '}
                                <a href="#login" onClick={switchMode}>
                                    Login Here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;