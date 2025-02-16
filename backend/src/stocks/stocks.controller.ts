import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StockFundamentalsModel } from './models/stock_fundamental.model';

@Controller('stocks')
export class StocksController {
    constructor(private readonly stocksService: StocksService) { }

    @Get('fundamentals')
    async getBySymbol(@Query('symbol') symbol: string): Promise<StockFundamentalsModel> {
        var stockFundamentals = await this.stocksService.get(symbol);

        return stockFundamentals;
    }
}
