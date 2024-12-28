import { IngredientDto } from "./ingredient.dto";

export interface RecipeCreateDto {
    name: string;
    servingSize: number;
    preperationTimeSeconds: number;
    cookingTimeSeconds: number;
    ingredients: IngredientDto[];
}