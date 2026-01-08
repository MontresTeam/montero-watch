import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/auth", // Adjust to your backend URL
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const response = await api.post("/refresh");
                const { accessToken } = response.data;

                // Update the header of the original request and the default instance
                api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

                return api(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
