import axios from "axios";

// ** Request Interceptor
axios.interceptors.request.use(
    (config: any) => {
        if (__DEV__) {
            console.log(`--> ${config.method?.toUpperCase()} ${config.url}`, { params: config.params, data: config.data });
        }
        // ** Set timeout
        if (!config.timeout) {
            config.timeout = 30000;
        }

        config.headers['Content-Type'] = 'application/json';

        // ** Set Authorization header
        const accessToken = ''
        if (accessToken && !config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        if (__DEV__) {
            console.log('--> REQUEST ERROR', error);
        }
        return Promise.reject(error)
    }
);

// ** Response Interceptor
axios.interceptors.response.use(
    response => {
        if (__DEV__) {
            console.log(`<-- RESPONSE ${response.status} ${response.config.url}`, response);
        }
        return response;
    },
    error => {
        if (__DEV__) {
            console.log(`<-- RESPONSE ERROR ${error.response?.status} ${error.config.url}`, error.response?.data);
        }
        return Promise.reject(error)
    }
);

