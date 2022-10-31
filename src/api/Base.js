import axios from 'axios';
import { BASE_URL } from '../constants/config';
import { AsyncStorage } from 'react-native';


export const baseAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 7000,
    headers: {
        Accept: 'application/json',
    },
});

baseAxios.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            config.headers.Authorization = "Bearer " + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);