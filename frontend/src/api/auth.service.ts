import axios from 'axios';
import Cookies from 'js-cookie';
import { apiClient } from './api.client';

const API_BASE_URL = import.meta.env.VITE_API_URL;

class AuthService {
    public async login(username: string, password: string) {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { username, password });
        const { accessToken, refreshToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        Cookies.set('refreshToken', refreshToken, { expires: 30, path: '/', secure: true, sameSite: 'Strict' });

        apiClient.setAuthToken(accessToken);

        return { accessToken, refreshToken };
    }

    public getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    public async logout() {
        localStorage.removeItem('accessToken');
        Cookies.remove('refreshToken');
    }
}

export const authService = new AuthService();
