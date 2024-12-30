
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe, RecipeDocument } from 'src/recipes/recipe.schema';
import { CreateRecipeDto } from './create-recipe.dto';

@Injectable()
export class RecipesService {
    constructor(@InjectModel(Recipe.name) private model: Model<Recipe>) { }

    async create(dto: CreateRecipeDto): Promise<RecipeDocument> {
        const createdRecipe = new this.model(dto);

        return createdRecipe.save();
    }

    async get(id: string): Promise<RecipeDocument> {
        const recipe = await this.model.findOne({ _id: id }).exec();

        if (!recipe) throw new NotFoundException(`Recipe with ID ${id} not found`);

        return recipe;
    }
}
