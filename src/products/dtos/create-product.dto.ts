import {IsNotEmpty, IsString, IsOptional, IsNumber} from 'class-validator';
import {} from '../schemas/product.schema';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsString()
  @IsOptional()
  category: string;
}