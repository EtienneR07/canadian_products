import { RecipeIngredientDto } from "./recipe-ingredient.dto";
import { RecipeInstructionDto } from "./recipe-instruction.dto";

export class CreateRecipeDto {
    name: string;
    source: string;
    servingSize: number;
    preperationTimeSeconds: number;
    cookingTimeSeconds: number;
    ingredients: RecipeIngredientDto[];
    instructions: RecipeInstructionDto[];
}