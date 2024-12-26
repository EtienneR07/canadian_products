import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesService } from './recipes.service';
import { Recipe, RecipeSchema } from './recipe.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])],
    controllers: [RecipesController],
    providers: [RecipesService]
})
export class RecipesModule { }
