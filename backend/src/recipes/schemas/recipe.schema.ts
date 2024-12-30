import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RecipeIngredient } from './ingredient.schema';
import { RecipeInstruction } from './recipe.instruction.schema';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
    @Prop({ required: true })
    name: string;

    @Prop()
    source: string;

    @Prop()
    servingSize: number;

    @Prop()
    preperationTimeSeconds: number;

    @Prop()
    cookingTimeSeconds: number;

    @Prop([RecipeIngredient])
    Ingredients: RecipeIngredient[];

    @Prop([RecipeInstruction])
    Instructions: RecipeInstruction[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
