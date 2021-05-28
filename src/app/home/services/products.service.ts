import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');

  }

  deleteProduct(id: number): void{
    this.http.delete(`http://localhost:3000/products/${ id }`);
  }
}
