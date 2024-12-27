import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

class RecipesService {
    public async create() {
        const response = await axios.post(`${API_BASE_URL}/recipes`);
    }
}

export const recipesService = new RecipesService();
