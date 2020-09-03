import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {PaymentInterface} from "./payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  create(payment: PaymentInterface): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/payments', payment);
  }
}
