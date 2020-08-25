import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../product/product";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductShoppingCartService {

  constructor(private http: HttpClient) { }

  create(product: Product): Observable<Product> {
    debugger
    return this.http.post<Product>(environment.apiUrl + '/api/productShoppingCarts/' + product.id, product);
  }

  delete(product: Product): Observable<Product> {
    return this.http.delete<Product>(environment.apiUrl + '/api/productShoppingCarts/product/' + product.id);
  }
}
