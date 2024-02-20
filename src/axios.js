import axios from "axios";

export const adminInstance = axios.create({
    baseURL: 'https://portfolio-backend-tau-two.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
    },
})

adminInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})
