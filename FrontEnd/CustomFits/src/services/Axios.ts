import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:3000/api",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true 
});

export default api;
