import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingPage from "./LandingPage";
import { useUser } from "../context/UserContext";

export default function Logout() {
    const navigate = useNavigate();
    const userContext = useUser();

    useEffect(() => {
        userContext.setUser(null);

        delete axios.defaults.headers.common["Authorization"];

        navigate("/", { replace: true });
    }, [navigate]);

    return <LandingPage />;
}