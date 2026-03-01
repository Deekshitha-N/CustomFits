import { useState } from "react";
import "./Login.css"; // Import CSS file
import "./../styles/card-template.css";
import { login } from "../services/LoginApiService";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo1.png"
import InputField from "../components/common/InputField/InputField";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setError("");
        try {
            const result = await login(email, password);
            console.log(result);
            navigate("/home");
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
            <img className="logo" src={Logo} alt="Logo" />
            <div className="card-template">
                <h1 className="login-title">CustomFits Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <InputField
                        id="login-email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required={true}
                        />
                    </div>

                    <div className="input-group">
                        <InputField
                            id="login-password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required={true}
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