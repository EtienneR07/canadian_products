import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class RecipeIngredient {
    @Prop({ required: true })
    name: string;

    @Prop()
    weight?: number; // in grams

    @Prop()
    volume?: number; // in ml

    @Prop()
    wholeAmount?: number;

    @Prop()
    preparation: string;
}

export const RecipeIngredientSchema = SchemaFactory.createForClass(RecipeIngredient);
