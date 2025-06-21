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
        const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDZkOWMwMTI2ZTcxODBlZDM3N2NmMWY5ODBkYzUyZCIsIm5iZiI6MTc1MDQ4NzIyNS41Miwic3ViIjoiNjg1NjUwYjlhOWQ1ZTA5NjE2ZWM1Nzc4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.jj7j_h6LQ8rMu1PpQk1crCwyH9AJJ0L_aIXOeCbQNns'
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
            console.log(`<-- ${response.status} ${response.config.url}`, response.data);
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

