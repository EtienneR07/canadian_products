import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesService } from './recipes.service';
import { RecipeInstruction, RecipeInstructionSchema } from './schemas/recipe.instruction.schema';
import { RecipeIngredientSchema } from './schemas/ingredient.schema';
import { RecipeSchema } from './schemas/recipe.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Recipe', schema: RecipeSchema },
        { name: 'Ingredient', schema: RecipeIngredientSchema },
        { name: 'Instruction', schema: RecipeInstructionSchema },
    ]),
    ],
    controllers: [RecipesController],
    providers: [RecipesService]
})
export class RecipesModule { }
