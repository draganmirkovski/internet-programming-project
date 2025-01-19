import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const productSubscription = this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
      },
    });

    this.subscription.add(productSubscription);
  }

  addToCart(): void {
    if (this.product) {
      if (window.confirm('Are you sure you want to buy this product?')) {
        this.productService.addToCart(this.product);
        console.log('Product added to cart.');
        this.router.navigate(['/cart']);
      } else {
        console.log('Action canceled.');
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
