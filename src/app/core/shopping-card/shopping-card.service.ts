import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../product/product';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ShoppingCard} from './shopping-card';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ShoppingCard> {
    return this.http.get<ShoppingCard>(environment.apiUrl + '/api/shoppingCard/products');
  }

  addProduct(id: number, count: number): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl + '/api/shoppingCard/add/' + id + '/' + count, null);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<Product>(environment.apiUrl + '/api/shoppingCard/update/' + product.id, product);
  }

  deleteProduct(product: Product): Observable<any> {
    return this.http.delete(environment.apiUrl + '/api/shoppingCard/delete/' + product.id);
  }

  getAmount(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/shoppingCard/amount');
  }
}
