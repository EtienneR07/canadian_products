import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Ingredient } from './ingredient.schema';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
    @Prop({ required: true })
    name: string;

    @Prop()
    servingSize: number;

    @Prop()
    preperationTimeSeconds: number;

    @Prop()
    cookingTimeSeconds: number;

    @Prop([Ingredient])
    Ingredients: Ingredient[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
