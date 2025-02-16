import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type StockFundamentalsDocument = StockFundamentals & Document;

@Schema()
export class StockFundamentals {
    @Prop({ required: true })
    symbol: string;

    @Prop({ required: true })
    exchange: string;

    @Prop()
    lastUpdated: Date;

    @Prop()
    description: string;

    @Prop()
    cik: string;

    @Prop()
    currency: string;

    @Prop()
    country: string;

    @Prop()
    sector: string;

    @Prop()
    industry: string;

    @Prop()
    fiscalYearEnd: string;

    @Prop()
    latestQuarter: Date;

    @Prop()
    marketCapitalization: number;

    @Prop()
    ebitda: number;

    @Prop()
    peRatio: number;

    @Prop()
    peGRatio: number;

    @Prop()
    bookValue: number;

    @Prop()
    dividendPerShare: number;

    @Prop()
    dividendYield: number;

    @Prop()
    eps: number;

    @Prop()
    revenuePerShareTTM: number;

    @Prop()
    profitMargin: number;

    @Prop()
    operatingMarginTTM: number;

    @Prop()
    returnOnAssetsTTM: number;

    @Prop()
    returnOnEquityTTM: number;

    @Prop()
    revenueTTM: number;

    @Prop()
    grossProfitTTM: number;

    @Prop()
    dilutedEPSTTM: number;

    @Prop()
    quarterlyEarningsGrowthYOY: number;

    @Prop()
    quarterlyRevenueGrowthYOY: number;

    @Prop()
    trailingPE: number;

    @Prop()
    forwardPE: number;

    @Prop()
    priceToSalesRatioTTM: number;

    @Prop()
    priceToBookRatio: number;

    @Prop()
    evToRevenue: number;

    @Prop()
    evToEBITDA: number;

    @Prop()
    beta: number;

    @Prop()
    weekHigh52: number;

    @Prop()
    weekLow52: number;

    @Prop()
    dayMovingAverage50: number;

    @Prop()
    dayMovingAverage200: number;

    @Prop()
    sharesOutstanding: number;

    @Prop()
    dividendDate: Date;

    @Prop()
    exDividendDate: Date;
}

export const StockFundamentalsSchema = SchemaFactory.createForClass(StockFundamentals);

StockFundamentalsSchema.index({ symbol: 1, exchange: 1 }, { unique: true });