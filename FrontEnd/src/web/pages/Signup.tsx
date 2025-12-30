import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Signup.css";
import "./../utilities/card-template.css";
import { registerUser } from "../api/LoginApiService";

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    role: "Customer" | "Designer";
};

const Signup: React.FC = () => {
    const [form, setForm] = useState<RegisterRequest>({
        name: "",
        email: "",
        password: "",
        role: "Customer",
    });

    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            await registerUser(form);
            setSuccess("Account created successfully! Please login.");
            setForm({ name: "", email: "", password: "", role: "Customer" });
        } catch (err: any) {
            setError(err.message || "Signup failed");
        }
    };

    return (
        <div className="Signup">
            <div className="card-template">
                <h2>Join CustomFits</h2>
                <p className="subtitle">Create your account</p>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <select name="role" value={form.role} onChange={handleChange}>
                        <option value="Customer">Customer</option>
                        <option value="Designer">Designer</option>
                    </select>

                    <button type="submit">Create Account</button>
                </form>

                <p className="footer-text">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
