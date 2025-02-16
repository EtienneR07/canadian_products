
import { HttpException, HttpStatus, Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { StockFundamentalsModel } from './models/stock_fundamental.model';
import axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockFundamentals } from './schemas/stockFundamentals';

@Injectable()
export class StocksService {
    private readonly alphaVantageBaseUrl = "https://www.alphavantage.co/query?function=OVERVIEW";

    constructor(@InjectModel(StockFundamentals.name) private model: Model<StockFundamentals>) { }

    public async get(symbol: string): Promise<StockFundamentalsModel> {
        var model = await this.getFromMongo(symbol);

        if (model != null) return model;

        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        const url = `${this.alphaVantageBaseUrl}&symbol=${symbol}&apikey=${apiKey}`;
        try {
            const response = await axios.get(url);

            if (response.data == null) throw new NotFoundException;

            const model = new StockFundamentalsModel(response.data);

            await this.cache(model);

            return model;
        } catch (error) {
            throw new HttpException(
                'Failed to fetch stock data',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    public async cache(data: StockFundamentalsModel): Promise<StockFundamentalsModel> {
        const cache = new this.model(data);

        return cache.save();
    }

    public async getFromMongo(symbol: string): Promise<StockFundamentalsModel> {
        const stock = await this.model.findOne({ symbol: symbol }).exec();

        return stock;
    }
}
