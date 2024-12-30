import { RecipeIngredient } from "../schemas/ingredient.schema";

export class RecipeIngredientDto {
    name: string;
    weight?: number; // in g
    volume?: number; // in ml
    wholeAmount?: number; // whole quantity
    preparation: string; // example (very finely diced,  cut into pieces, for garnish etc...)

    public static FromSchema(schema: RecipeIngredient): RecipeIngredientDto {
        return {
            name: schema.name,
            volume: schema.volume,
            weight: schema.weight,
            wholeAmount: schema.wholeAmount,
            preparation: schema.preparation
        }
    }
}