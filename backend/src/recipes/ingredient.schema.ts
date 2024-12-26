import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IngredientDocument = Ingredient & Document;

@Schema()
export class Ingredient {
    @Prop({ required: true })
    name: string;

    @Prop()
    weight?: number; // in grams

    @Prop()
    volume?: number; // in ml
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
