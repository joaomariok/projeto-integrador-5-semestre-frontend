import axios from 'axios';

const oldUrl = "http://localhost:3050/api"
const herokuApiURl = 'https://projeto-integrador-5s-backend.herokuapp.com/'

const api = axios.create({
    baseURL: herokuApiURl,
});

export default api;