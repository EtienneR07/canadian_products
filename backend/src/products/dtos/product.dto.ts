import { ProductDocument } from "../schemas/product.schema";


export class ProductDto {
    id: string;
    name: string;

    public static FromSchema(schema: ProductDocument): ProductDto {
        return {
            id: schema._id.toString(),
            name: schema.name
        }
    }
}