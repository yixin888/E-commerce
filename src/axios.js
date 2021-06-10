import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-8038d/us-central1/api' // 这里是 API (cloud function) URL
});

export default instance;
