import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: CreateProductDto) {
    const createdProduct = await this.productModel.create(product);
    return createdProduct.save();
  }

  async findAll() {
    const products = await this.productModel.find({});
    return products;
  }

  async findOne(id: string) {
    return await this.productModel.findById(id);
  }

  async update(id: string, product: CreateProductDto) {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }
}
