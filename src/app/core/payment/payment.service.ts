import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {PaymentType} from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  create(orderId, payment: PaymentType): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/api/payments/' + orderId + '/' + payment, null);
  }
}
