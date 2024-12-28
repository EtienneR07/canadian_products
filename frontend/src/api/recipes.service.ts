import { apiClient } from "./api.client";
import { RecipeCreateDto } from "./dtos/recipe-create.dto";
import { RecipeDto } from "./dtos/recipe.dto";

class RecipesService {
    public async create(dto: RecipeCreateDto) {
        return await apiClient.post<RecipeDto, RecipeCreateDto>("recipes", dto);
    }
}

export const recipesService = new RecipesService();
