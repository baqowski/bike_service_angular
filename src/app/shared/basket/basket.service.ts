import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../core/product/product";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(environment.apiUrl + '/api/basket/userProducts')
}
}
