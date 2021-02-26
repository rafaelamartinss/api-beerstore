import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './product/products.controller';
import { ProductsModule } from './product/products.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://rafaela:***@cluster0.2vd3s.mongodb.net/beerstore?retryWrites=true&w=majority'), ProductModule],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
