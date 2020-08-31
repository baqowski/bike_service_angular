import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Product} from './product';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/ext/products');
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + '/ext/products/' + id);
  }

  update(product: Product) {
    return this.http.put<Product>(environment.apiUrl + '/api/product/' + product.id, product);
  }

  delete(id: number) {
    return this.http.delete(environment.apiUrl + '/api/product/' + id);
  }
}
