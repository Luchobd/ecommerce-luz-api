import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAllProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.update(id, createProductDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productsService.delete(id);
  }
}
