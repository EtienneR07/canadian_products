import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './products.service';
import { ProductSchema } from './schemas/product.schema';
import { ProductsController } from './products.controller';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Product', schema: ProductSchema },
    ]),
    ],
    controllers: [ProductsController],
    providers: [ProductService]
})
export class ProductModule { }
