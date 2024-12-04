import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./home/home.component').then((m) => m.HomeComponent);
        },
      },
      {
        path: 'signin',
        loadComponent: () => {
          return import('./sign-in/sign-in.component').then((m) => m.SignInComponent);
        },
      },
      {
        path: 'signup',
        loadComponent: () => {
          return import('./sign-up/sign-up.component').then((m) => m.SignUpComponent);
        },
      },
      {
        path: 'cart',
        loadComponent: () => {
          return import('./cart/cart.component').then((m) => m.CartComponent);
        },
      },
      {
        path: 'checkout',
        loadComponent: () => {
          return import('./checkout/checkout.component').then((m) => m.CheckoutComponent);
        },
      },
      {
        path: 'wishlist',
        loadComponent: () => {
          return import('./wishlist/wishlist.component').then((m) => m.WishlistComponent);
        },
      },
      {
        path: 'singleproduct',
        loadComponent: () => {
          return import('./single-product/single-product.component').then((m) => m.SingleProductComponent);
        },
      },
      {
        path: 'search',
        loadComponent: () => {
          return import('./search/search.component').then((m) => m.SearchComponent);
        },
      },
];
