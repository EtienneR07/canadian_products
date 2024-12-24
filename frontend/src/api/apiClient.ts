import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: API_BASE_URL,
        });

        this.client.interceptors.request.use((config) => {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
        });

        this.client.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401) {
                    const refreshToken = Cookies.get('refreshToken');

                    if (!refreshToken) return Promise.reject(error);

                    const { accessToken, refreshToken: newRefreshToken } = await this.refreshToken(refreshToken);

                    error.config.headers['Authorization'] = `Bearer ${accessToken}`;

                    Cookies.set('refreshToken', newRefreshToken, { expires: 30, path: '/', secure: true, sameSite: 'Strict' });

                    return axios(error.config);
                }
                return Promise.reject(error);
            }
        );
    }

    public getClient(): AxiosInstance {
        return this.client;
    }

    public setAuthToken(token: string) {
        this.client.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    private async refreshToken(refreshToken: string) {
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, { refreshToken });
        const { accessToken, refreshToken: newRefreshToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        Cookies.set('refreshToken', newRefreshToken, { expires: 30, path: '/', secure: true, sameSite: 'Strict' });

        return { accessToken, refreshToken };
    }
}

export const apiClient = new ApiClient();
