import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Order} from "../order";
import {Observable} from "rxjs";
import {PaymentInterface} from "./payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  create(order: Order): Observable<PaymentInterface> {
    return this.http.post<PaymentInterface>(environment + '/api/payment', order);
  }
}
