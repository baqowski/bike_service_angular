import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../product/product';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ShoppingCart} from '../shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(environment.apiUrl + '/api/shoppingCarts');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl + '/api/shoppingCard/add/' + product.id, product);
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
