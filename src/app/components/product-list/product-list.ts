import { Component, Inject} from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { ProductService } from '../../service/product-service';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import { DiscountPipe } from "../../pipes/discount-pipe";



@Component({
  selector: 'app-product-list',
  imports: [ProductCard, CommonModule, DiscountPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList {

showProducts: boolean = true;
isAdmin: boolean = false;

ProductService = Inject(ProductService);
products: Product[] = this.ProductService.getProducts();

product: Product = {
  id: 0,
  name: '',
  price: 2500,
  description: '',
};

deleteProduct() {
 
}

/**
 * Condition to include or exclude an element from the DOM.
 * When set to `true`, the element is rendered; when `false`, the element is removed from the DOM.
 * Commonly used with Angular's structural directive `*ngIf`.
 */
}
