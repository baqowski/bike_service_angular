import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../../public/product/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  create(products: Product[]): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/orders/', products);
  }

  getById(id): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/orders/' + id);
  }

  getOrderProducts(id): Observable<any>{
    return this.http.get<any>(environment.apiUrl + '/api/orders/' + id + '/products');
  }

}
