import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    AuthModule,
    RecipesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI)],
  providers: [],
  controllers: [RecipesController],
})
export class AppModule { }
