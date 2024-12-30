import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeDto } from './dtos/recipe.dto';
import { CreateRecipeDto } from './dtos/create-recipe.dto';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipeService: RecipesService) { }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<RecipeDto> {
        var recipe = await this.recipeService.get(id);

        return RecipeDto.FromSchema(recipe);
    }

    @Post()
    async create(@Body() createRecipeDto: CreateRecipeDto): Promise<RecipeDto> {
        const recipe = await this.recipeService.create(createRecipeDto);

        return RecipeDto.FromSchema(recipe);
    }
}
