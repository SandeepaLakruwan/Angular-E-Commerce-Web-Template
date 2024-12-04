import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlistItems = [
    { name: 'Smartphone', price: 799, image: '../../assets/images/products/phone.jpg' },
    { name: 'Headphones', price: 299, image: '../../assets/images/products/headphone.jpg' },
    { name: 'Laptop', price: 199, image: '../../assets/images/products/laptop.jpg' }
  ];

  addToCart(item: any): void {
    alert(`${item.name} added to cart.`);
    // Logic to move the item to the cart can be added here
  }

  removeFromWishlist(item: any): void {
    this.wishlistItems = this.wishlistItems.filter(wishlistItem => wishlistItem !== item);
    alert(`${item.name} removed from wishlist.`);
  }
}
