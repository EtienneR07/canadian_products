
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from 'src/recipes/recipe.schema';
import { CreateRecipeDto } from './create-recipe.dto';

@Injectable()
export class RecipesService {
    constructor(@InjectModel(Recipe.name) private model: Model<Recipe>) { }

    async create(dto: CreateRecipeDto): Promise<Recipe> {
        const createdRecipe = new this.model(dto);

        return createdRecipe.save();
    }

    async findAll(): Promise<Recipe[]> {
        return this.model.find().exec();
    }
}
