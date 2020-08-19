import {Injectable} from '@angular/core';
import {Product} from '../../core/product/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/api/basket/userProducts');
  }

  addProduct(id: number): Observable<Product> {
    return this.http.patch<Product>(environment.apiUrl + '/api/basket/add/' + id, null);
  }
}
