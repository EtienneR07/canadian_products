import { IngredientDto } from "./ingredient.dto";

export class CreateRecipeDto {
    name: string;
    servingSize: number;
    preperationTimeSeconds: number;
    cookingTimeSeconds: number;
    ingredients: IngredientDto[];
}