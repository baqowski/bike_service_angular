import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Product} from './product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/api/products');
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl + '/api/products', product);
  }

  getById(userId: number): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + '/api/product/' + userId);
  }

  update(product: Product) {
    return this.http.put<Product>(environment.apiUrl + '/api/product/' + product.id, product);
  }

  delete(id: number) {
    return this.http.delete(environment.apiUrl + '/api/product/' + id);
  }
}
