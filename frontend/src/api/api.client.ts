import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: API_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // this.client.interceptors.request.use((config) => {
        //     const accessToken = localStorage.getItem('accessToken');
        //     if (accessToken) {
        //         config.headers['Authorization'] = `Bearer ${accessToken}`;
        //     }
        //     return config;
        // });

        // this.client.interceptors.response.use(
        //     (response) => response,
        //     async (error) => {
        //         if (error.response?.status === 401) {
        //             const refreshToken = Cookies.get('refreshToken');

        //             if (!refreshToken) return Promise.reject(error);

        //             const { accessToken, refreshToken: newRefreshToken } = await this.refreshToken(refreshToken);

        //             error.config.headers['Authorization'] = `Bearer ${accessToken}`;

        //             Cookies.set('refreshToken', newRefreshToken, { expires: 30, path: '/', secure: true, sameSite: 'Strict' });

        //             return axios(error.config);
        //         }
        //         return Promise.reject(error);
        //     }
        // );
    }

    public async get<T>(url: string, id: string): Promise<T> {
        const response = await this.client.get(`${url}/${id}`);
        return response.data;
    }

    public async post<TResource, TBody>(url: string, data: TBody): Promise<TResource> {
        const response = await this.client.post<TResource>(url, data);
        return response.data;
    }

    public async put<TResource, TBody>(url: string, id: string, data: TBody): Promise<TResource> {
        const response = await this.client.put<TResource>(`${url}/${id}`, data);
        return response.data;
    }

    public async delete<T>(url: string, id: string): Promise<T> {
        const response = await this.client.delete<T>(`${url}/${id}`);
        return response.data;
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
