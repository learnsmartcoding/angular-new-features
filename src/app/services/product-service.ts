// product.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    const products: Product[] = [
      { id: 1, name: 'Smartphone X', price: 9.99 },
      { id: 2, name: 'Ultra HD Smart TV', price: 19.99 },
      { id: 3, name: 'Laptop Pro', price: 29.99 },
      { id: 4, name: 'Wireless Noise-Canceling Headphones', price: 2.99 },
      { id: 5, name: 'Digital Camera DSLR', price: 5.99 },
      // Add more products as needed
    ];

    return of(products);
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
