import * as dotenv from 'dotenv';
dotenv.config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/produts.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI), 
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
