import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Product[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const cartSubscription = this.productService.getCart().subscribe({
      next: (cart: Product[]) => {
        this.cart = cart;
      },
      error: (err) => {
        console.error('Error fetching cart:', err);
      },
    });

    this.subscription.add(cartSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
