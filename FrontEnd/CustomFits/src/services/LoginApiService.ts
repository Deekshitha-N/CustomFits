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

export const registerUser = async (data: RegisterRequest): Promise<void> => {
    const response = await api.post("/auth/register", data);

    return response.data;
};
