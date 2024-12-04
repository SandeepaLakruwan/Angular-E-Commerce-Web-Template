import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
  productArray: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        this.productArray = JSON.parse(params['data']);
        console.log(this.productArray);
      }
    });
  }

  product = {
    name: 'Sample Product',
    image: '../../assets/images/products/laptop.jpg',
    price: 99.99,
    inStock: true,
    description: 'Short description of the product.',
    longDescription: 'This is a detailed description of the product including features and specifications.'
  };

  similarProducts = [
    { name: 'Product 1', image: '../../assets/images/products/laptop.jpg', price: 89.99 },
    { name: 'Product 2', image: '../../assets/images/products/phone.jpg', price: 79.99 },
    { name: 'Product 3', image: '../../assets/images/products/headphone.jpg', price: 99.99 },
    { name: 'Product 4', image: '../../assets/images/products/laptop.jpg', price: 69.99 },
    { name: 'Product 5', image: '../../assets/images/products/phone.jpg', price: 59.99 },
  ];

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }

  addToWishlist(product: any) {
    console.log('Added to wishlist:', product);
  }

  buyNow(product: any) {
    console.log('Buying now:', product);
  }
}
