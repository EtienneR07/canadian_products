import { RecipeDocument } from "../schemas/recipe.schema";
import { RecipeIngredientDto } from "./recipe-ingredient.dto";
import { RecipeInstructionDto } from "./recipe-instruction.dto";

export class RecipeDto {
    id: string;
    name: string;
    source: string;
    servingSize: number;
    preperationTimeSeconds: number;
    cookingTimeSeconds: number;
    ingredients: RecipeIngredientDto[];
    instructions: RecipeInstructionDto[];

    public static FromSchema(schema: RecipeDocument): RecipeDto {
        return {
            id: schema._id.toString(),
            cookingTimeSeconds: schema.cookingTimeSeconds,
            ingredients: schema.Ingredients.map(i => RecipeIngredientDto.FromSchema(i)),
            name: schema.name,
            source: schema.source,
            preperationTimeSeconds: schema.preperationTimeSeconds,
            servingSize: schema.servingSize,
            instructions: schema.Instructions.map(s => RecipeInstructionDto.FromSchema(s))
        }
    }
}