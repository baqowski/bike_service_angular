import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ProductInterface} from './product';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(environment.apiUrl + '/ext/products');
  }

  getById(id: number): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(environment.apiUrl + '/ext/products/' + id);
  }

  update(product: ProductInterface) {
    return this.http.put<ProductInterface>(environment.apiUrl + '/api/product/' + product.id, product);
  }

  delete(id: number) {
    return this.http.delete(environment.apiUrl + '/api/product/' + id);
  }
}
