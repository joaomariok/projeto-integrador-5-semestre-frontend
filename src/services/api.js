import axios from 'axios';

const oldUrl = "http://localhost:3050/api"

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export default api;