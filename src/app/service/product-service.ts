import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
private products: Product[] = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'A high-performance laptop.' },
  { id: 2, name: 'Smartphone', price: 699.99, description: 'A latest model smartphone.' },
  { id: 3, name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones.' }
];

getProducts(): Product[] {
  return this.products;  
}

addProduct(product: Product): void {
  this.products.push(product);  
}

deleteProduct(id: number): void {
  this.products = this.products.filter(product => product.id !== id);  

}
}
