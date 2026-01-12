import api from "../lib/api";

export const loginUser = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    return data;
};

export const registerUser = async (userData) => {
    const { data } = await api.post("/auth/register", userData);
    return data;
};

export const logoutUser = async () => {
    await api.post("/auth/logout");
};

export const checkSession = async () => {
    const { data } = await api.post("/auth/refresh");
    return data;
};

export const verifyEmail = async (token) => {
    const { data } = await api.get(`/auth/verify-email/${token}`);
    return data;
};
export const getProfile = async () => {
    const { data } = await api.get("/auth/me");
    return data;
};

export const forgotPassword = async (email) => {
    const { data } = await api.post("/auth/forgot-password", { email });
    return data;
};

export const resetPassword = async (token, password) => {
    const { data } = await api.post(`/auth/reset-password/${token}`, { password });
    return data;
};

export const validateResetToken = async (token) => {
    const { data } = await api.get(`/auth/reset-password/${token}`);
    return data;
};
