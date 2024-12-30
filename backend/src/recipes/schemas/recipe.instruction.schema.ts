import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class RecipeInstruction {
    @Prop({ required: true })
    description: string;
}

export const RecipeInstructionSchema = SchemaFactory.createForClass(RecipeInstruction);
