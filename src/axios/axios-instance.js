import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://okrcentral.github.io/'
});

export default instance;
