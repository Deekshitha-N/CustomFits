// src/pages/Login.jsx
import React, { useState } from "react";
import "./Login.css"; // Import CSS file
import "./../utilities/card-template.css";
import { login } from "../api/LoginApiService";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setError("");
        try {
            const result = await login(email, password);
            console.log(result);
            alert("Login successful");
        } catch (err: any) {
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError("Invalid email or password");
            }
        }
    };

    return (
        <div className="Login">
            <div className="card-template">
                <h1 className="login-title">CustomFits Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>

                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="login-button">Login</button>
                </form>

                <div className="footer-text">
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}