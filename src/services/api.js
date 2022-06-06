import axios from 'axios';

const oldUrl = "http://localhost:3050/api"
const localUrl = "http://localhost:5000"
const deployUrl = "https://pi-5-semestre-backend.herokuapp.com/"

const api = axios.create({
    baseURL: deployUrl,
});

export default api;