import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  products: Product[] = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 }
  ];

  selectedProduct: Product = this.products[0];
  quantity: number = 1;
  cart = signal<{ product: Product, quantity: number, totalPrice: number }[]>([]);
  totalCost = signal(0);
  showDetails = signal(false);

  
  constructor() {
    // Effect to log the cart contents whenever it changes
    effect(() => {
      console.log('Cart updated:', this.cart());
    });

    // Effect to log the total cost whenever it changes
    effect(() => {
      console.log('Total cost updated:', this.totalCost());
    });

    // Effect to show a message based on the cart's total cost
    effect(() => {
      const total = this.totalCost();
      if (total > 100) {
        console.warn('Total cost is greater than 100!');
      }
    });
  }
  
  addToCart() {
    const item = this.cart().find(i => i.product.id === this.selectedProduct.id);
    const totalPrice = this.selectedProduct.price * this.quantity;

    if (item) {
      item.quantity += this.quantity;
      item.totalPrice += totalPrice;
    } else {
      this.cart.set([...this.cart(), {
        product: this.selectedProduct,
        quantity: this.quantity,
        totalPrice: totalPrice
      }]);
    }

    this.updateTotalCost();
  }

  removeFromCart(item: { product: Product, quantity: number, totalPrice: number }) {
    const updatedCart = this.cart().filter(i => i !== item);
    this.cart.set(updatedCart);
    this.updateTotalCost();
  }

  updateTotalCost() {
    const total = this.cart().reduce((acc, item) => acc + item.totalPrice, 0);
    this.totalCost.set(total);
  }

  toggleDetails() {
    this.showDetails.update(show => !show);
  }
}
