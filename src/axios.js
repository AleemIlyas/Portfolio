import axios from "axios";

export const adminInstance = axios.create({
    baseURL: 'http://localhost:5500',
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
