import api from "./Axios";


export const login = async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
        email,
        password
    });

    return response.data;
};

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    role: "Customer" | "Designer";
};

export interface User{
    id: string;
    name: string;
    email: string;
    role: string;
}

export const registerUser = async (data: RegisterRequest): Promise<User> => {
    const response = await api.post("/auth/register", data);

    return response.data;
};
