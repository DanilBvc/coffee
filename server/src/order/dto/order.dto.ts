import { Product } from 'src/products/schema/products.schema';

export class createOrderDto {
  readonly productData: Product;
}
