import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import your axios instance if you have a custom one
import LandingPage from "./LandingPage";

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove auth header from axios
        delete axios.defaults.headers.common["Authorization"];

        // Redirect to Landing page
        navigate("/", { replace: true });
    }, [navigate]);

    return <LandingPage></LandingPage>;
}