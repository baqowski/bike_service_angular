import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Product} from "./product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    debugger
    return this.http.get<Product[]>(environment.apiUrl + '/api/products');
  }

  getById(userId: number) {
      return this.http.get<Product>(environment.apiUrl + '/api/products/' + userId);
  }

}
