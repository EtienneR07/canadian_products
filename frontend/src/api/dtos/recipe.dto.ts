import { IngredientDto } from "./ingredient.dto";

export interface RecipeDto {
    name: string;
    servingSize: number;
    preperationTimeSeconds: number;
    cookingTimeSeconds: number;
    ingredients: IngredientDto[];
}