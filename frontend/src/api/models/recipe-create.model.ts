import { IngredientModel } from "./ingredient.model";

export interface RecipeCreateModel {
    name: string;
    servingSize: number;
    preperationTimeSeconds: number;
    cookingTimeSeconds: number;
    ingredients: IngredientModel[];
}