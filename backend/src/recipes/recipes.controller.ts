import { Controller, Get, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeDto } from './recipe.dto';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipeService: RecipesService) { }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<RecipeDto> {
        var recipe = await this.recipeService.get(id);

        return RecipeDto.FromSchema(recipe);
    }
}
