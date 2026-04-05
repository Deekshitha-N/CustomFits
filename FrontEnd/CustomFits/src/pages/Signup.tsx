import React, { useState} from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Signup.css";
import "./../styles/card-template.css";
import { registerUser } from "../services/LoginApiService";
import InputField from "../components/common/InputField/InputField";
import InputSelect from "../components/common/InputSelect/InputSelect";

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
                <h2 className="title">Join CustomFits</h2>
                <p className="subtitle">Create your account</p>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <InputField
                        id="signup-name"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={(e) => handleChange(e)}
                            required={true}
                        />
                        <InputField
                            id="signup-email"
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={(e) => handleChange(e)}
                            required={true}
                        />
                        <InputField
                            id="signup-password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) => handleChange(e)}
                            required={true}
                        />
                        <InputSelect
                            id="signup-role"
                            name="role"
                            options={[
                                { value: "Customer", label: "Customer" },
                                { value: "Designer", label: "Designer" },
                            ]}
                            value={form.role}
                            onChange={handleChange}
                        />
                    </div>

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
