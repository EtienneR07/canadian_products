
import { HttpException, HttpStatus, Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { StockFundamentalsModel } from './models/stock_fundamental.model';
import axios from 'axios';

@Injectable()
export class StocksService {
    private readonly alphaVantageBaseUrl = "https://www.alphavantage.co/query?function=OVERVIEW";

    constructor() { }

    async get(symbol: string): Promise<StockFundamentalsModel> {
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        const url = `${this.alphaVantageBaseUrl}&symbol=${symbol}&apikey=${apiKey}`;
        try {
            const response = await axios.get(url);

            if (response == null) throw new NotFoundException;

            return new StockFundamentalsModel(response.data);
        } catch (error) {
            throw new HttpException(
                'Failed to fetch stock data',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
