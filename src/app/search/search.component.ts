import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

interface Product {
  name: string;
  image: string;
  price: string;
  quantity: number;
  category?: string;
  color?: string;
  condition?: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  categories = ['Laptops', 'Mobile Phones', 'Headphones', 'Cameras'];
  colors = ['Red', 'Blue', 'Black', 'White'];
  products: Product[] = []; // All products
  displayedProducts: Product[] = []; // Filtered products for display
  priceRange = { min: null, max: null };
  selectedCondition = '';
  selectedFilter = '';
  selectedCategory = ''; // For selected category filter
  selectedColor = '';    // For selected color filter
  currentPage = 1;
  itemsPerPage = 12;
  totalPages = 0;
  pages: number[] = [];

  ngOnInit() {
    this.initializeProducts();
    this.updateDisplayedProducts();
  }

  // Initialize products with sample data
  initializeProducts() {
    this.products = Array.from({ length: 50 }, (_, i) => ({
      name: `Product ${i + 1}`,
      image: `../../assets/images/products/laptop.jpg`,
      price: (Math.random() * 500 + 50).toFixed(2),
      quantity: Math.floor(Math.random() * 100),
      category: this.categories[i % this.categories.length], // Assigning categories
      color: this.colors[i % this.colors.length],           // Assigning colors
      condition: i % 2 === 0 ? 'new' : 'used',              // Randomly assign condition
    }));
    this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    this.updatePagination();
  }

  updatePagination() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Update the displayed products based on filters
  updateDisplayedProducts() {
    let filteredProducts = this.products;

    // Apply filters
    if (this.selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === this.selectedCategory);
    }
    if (this.selectedColor) {
      filteredProducts = filteredProducts.filter(product => product.color === this.selectedColor);
    }
    if (this.selectedCondition) {
      filteredProducts = filteredProducts.filter(product => product.condition === this.selectedCondition);
    }
    if (this.priceRange.min !== null && !isNaN(this.priceRange.min)) {
      filteredProducts = filteredProducts.filter(product => parseFloat(product.price) >= this.priceRange.min!);
    }
    
    if (this.priceRange.max !== null && !isNaN(this.priceRange.max)) {
      filteredProducts = filteredProducts.filter(product => parseFloat(product.price) <= this.priceRange.max!);
    }
    
    

    // Sort products based on selected filter
    if (this.selectedFilter === 'priceLowToHigh') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (this.selectedFilter === 'priceHighToLow') {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (this.selectedFilter === 'quantityHighToLow') {
      filteredProducts = filteredProducts.sort((a, b) => b.quantity - a.quantity);
    } else if (this.selectedFilter === 'quantityLowToHigh') {
      filteredProducts = filteredProducts.sort((a, b) => a.quantity - b.quantity);
    }

    // Update pagination and displayed products
    this.totalPages = Math.ceil(filteredProducts.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.displayedProducts = filteredProducts.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProducts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedProducts();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedProducts();
  }

  // Filters for category and color
  toggleCategory(category: string) {
    this.selectedCategory = category;
    this.updateDisplayedProducts();
  }

  toggleColor(color: string) {
    this.selectedColor = color;
    this.updateDisplayedProducts();
  }

  // Add product to cart or wishlist
  addToCart(product: Product) {
    console.log('Add to cart:', product);
  }

  addToWishlist(product: Product) {
    console.log('Add to wishlist:', product);
  }
}
