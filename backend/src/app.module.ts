import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StocksModule } from './stocks/stocks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StocksModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI)
  ],
  providers: [],
})
export class AppModule { }
