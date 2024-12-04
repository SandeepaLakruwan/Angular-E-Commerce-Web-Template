import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    {
      id: 1,
      image: '../../assets/images/products/laptop.jpg',
      name: 'Laptop',
      price: 1000,
      quantity: 1
    },
    {
      id: 2,
      image: '../../assets/images/products/phone.jpg',
      name: 'Smartphone',
      price: 600,
      quantity: 2
    },
    {
      id: 3,
      image: '../../assets/images/products/headphone.jpg',
      name: 'Headphones',
      price: 200,
      quantity: 1
    },
    {
      id: 4,
      image: '../../assets/images/products/headphone.jpg',
      name: 'Headphones',
      price: 200,
      quantity: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  onCheckout() {
    // Handle checkout logic (e.g., navigation to checkout page or calling API)
    alert('Proceeding to checkout');
    
  }
}
