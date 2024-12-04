import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topSellingProducts = [
    { name: 'Laptop', price: 999, discount: 15, stock: 10, image: '../../assets/images/products/laptop.jpg', description:'Laptop description' },
    { name: 'Smartphone', price: 699, discount: 20, stock: 25, image: '../../assets/images/products/phone.jpg', description:'Laptop description' },
    { name: 'Headphones', price: 199, discount: 30, stock: 50, image: '../../assets/images/products/headphone.jpg', description:'Laptop description' }
  ];

  categories = [
    { name: 'Laptops', image: '../../assets/images/category/laptop.jpg' },
    { name: 'Mobiles', image: '../../assets/images/category/phone.jpg' },
    { name: 'Headphones', image: '../../assets/images/category/headphone.jpg' },
    { name: 'Tablets', image: '../../assets/images/category/tab.jpg' }
  ];

  blogs = [
    { title: 'Best Laptops 2024', description: 'Find the best laptops for work and play.', image: '../../assets/images/blog/laptop.jpg' },
    { title: 'Top Mobile Trends', description: 'Discover the latest trends in smartphones.', image: '../../assets/images/blog/phone.jpg' },
    { title: 'Headphone Buying Guide', description: 'Choose the best headphones for your needs.', image: '../../assets/images/blog/headphone.jpg' }
  ];

  addToCart(product: any): void {
    alert(`${product.name} added to cart.`);
  }

  addToWishlist(product: any): void {
    alert(`${product.name} added to wishlist.`);
  }

  readBlog(blog: any): void {
    alert(`Reading blog: ${blog.title}`);
  }
}
