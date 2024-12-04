import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems = [
    { name: 'Laptop', price: 1000, quantity: 1 },
    { name: 'Mobile', price: 500, quantity: 1 },
    { name: 'Headphones', price: 150, quantity: 1 }
  ];

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  placeOrder(): void {
    alert('Order placed successfully!');
  }
}
