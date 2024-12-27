import { Ingredient } from "./ingredient.schema";

export class IngredientDto {
    name: string;
    weight?: number; // in g
    volume?: number; // in ml

    public static FromSchema(ingredientSchema: Ingredient): IngredientDto {
        return {
            name: ingredientSchema.name,
            volume: ingredientSchema.volume,
            weight: ingredientSchema.weight
        }
    }
}