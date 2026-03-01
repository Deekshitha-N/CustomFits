import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./ForgotPassword.css";
import "./../styles/card-template.css";
import InputField from "../components/common/InputField/InputField";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!email) {
            setError("Email is required");
            return;
        }

        // Later: call backend API
        setMessage("If an account exists, a reset link has been sent.");
        setEmail("");
    };

    return (
        <div className="ForgotPassword">
            <div className="card-template">
                <h2>Forgot Password</h2>
                <p className="subtitle">
                    Enter your email to receive password reset instructions
                </p>

                {error && <p className="error">{error}</p>}
                {message && <p className="success">{message}</p>}

                <form onSubmit={handleSubmit}>
                    <InputField
                        id="forgot-password-email"
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        required={true}
                    />

                    <button type="submit">Send Reset Link</button>
                </form>

                <p className="footer-text">
                    Remembered your password? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
