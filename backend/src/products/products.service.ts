
import { Model } from 'mongoose';
import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
    private readonly openfoodfactsUrlProduct = "https://world.openfoodfacts.org/api/v2/product";

    constructor(@InjectModel(Product.name) private model: Model<Product>) { }

    async get(barcode: string): Promise<ProductDocument> {
        throw new NotImplementedException(`Product with barcode ${barcode} not found`);
    }
}
