import axios from 'axios'

const axiosOption = {
    baseURL: '/',
    timeout: 1000
}

// @ts-ignore
const instance = axios.create(axiosOption);

instance.interceptors.request.use(
    (config) => config,
    async (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response.data,
    async (error) => Promise.reject(error)
);

export default instance;
