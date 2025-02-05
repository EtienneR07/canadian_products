import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from './dtos/product.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) { }

    @Get(':barcode')
    async getByBarCode(@Param('barcode') barcode: string): Promise<ProductDto> {
        var product = await this.productService.get(barcode);

        return ProductDto.FromSchema(product);
    }
}
