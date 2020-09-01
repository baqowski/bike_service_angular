import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Order} from "../order/order";
import {Observable} from "rxjs";
import {Payment} from "./payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  create(order: Order): Observable<Payment> {
    return this.http.post<Payment>(environment + '/api/payment', order);
  }
}
