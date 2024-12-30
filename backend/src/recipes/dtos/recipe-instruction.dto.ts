import { RecipeInstruction } from "../schemas/recipe.instruction.schema";

export class RecipeInstructionDto {
    description: string;

    public static FromSchema(recipeStepSchema: RecipeInstruction): RecipeInstructionDto {
        return {
            description: recipeStepSchema.description,
        }
    }
}