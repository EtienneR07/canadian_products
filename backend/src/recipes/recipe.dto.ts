import { IngredientDto } from "./ingredient.dto";
import { Recipe, RecipeDocument } from "./recipe.schema";

export class RecipeDto {
    id: string;
    name: string;
    servingSize: number;
    preperationTimeSeconds: number;
    cookingTimeSeconds: number;
    ingredients: IngredientDto[];

    public static FromSchema(recipeSchema: RecipeDocument): RecipeDto {
        return {
            id: recipeSchema._id.toString(),
            cookingTimeSeconds: recipeSchema.cookingTimeSeconds,
            ingredients: [],
            name: recipeSchema.name,
            preperationTimeSeconds: recipeSchema.preperationTimeSeconds,
            servingSize: recipeSchema.servingSize
        }
    }
}