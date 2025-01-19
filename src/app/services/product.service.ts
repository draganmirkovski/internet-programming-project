import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'http://localhost:3000/sneakers';
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  getCart(): Observable<Product[]> {
    this.cartSubject.next(this.cart);
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }
}
