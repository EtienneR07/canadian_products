import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StocksModule } from './products/stocks.module';

@Module({
  imports: [
    StocksModule,
    ConfigModule.forRoot()],
  providers: [],
})
export class AppModule { }
