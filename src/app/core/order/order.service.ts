import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Order, OrderInterface} from './order';
import {PaymentInterface} from '../payment/payment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<OrderInterface[]> {
    return this.http.get<OrderInterface[]>(environment.apiUrl + '/api/orders');
  }

  findOrderByUserUuidAndOrderId(uuid, orderId): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/orders/search/getByUser_uuidAndId?uuid=' + uuid + '&orderId=' + orderId + '&projection=full');
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/orders/', order);
  }

  findUserOrders(uuid): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/orders/search/findAllByUser_Uuid?uuid=', uuid );
  }

  getOrderProducts(id): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/orders/' + id + '/products');
  }

  getOrderPayment(orderId, paymentId): Observable<PaymentInterface> {
    return this.http.get<PaymentInterface>(environment.apiUrl + '/api/orders/' + orderId + '/payment/' + paymentId);
  }
}
