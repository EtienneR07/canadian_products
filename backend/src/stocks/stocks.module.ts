import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StockFundamentals, StockFundamentalsSchema } from './schemas/stockFundamentals';

@Module({
    imports: [MongooseModule.forFeature([{ name: StockFundamentals.name, schema: StockFundamentalsSchema }])],
    controllers: [StocksController],
    providers: [StocksService]
})
export class StocksModule { }
