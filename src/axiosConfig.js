import axios from 'axios';
const instance = axios.create({
    // baseURL: 'http://localhost:3456'
    baseURL: 'https://ds2lvg.gabia.io/'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;