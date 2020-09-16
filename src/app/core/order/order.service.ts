import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Order, OrderInterface, OrderServiceType} from './order';
import {PaymentInterface} from '../payment/payment';
import {ProductInterface} from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  product$: Observable<ProductInterface>;
  orderSubject: BehaviorSubject<OrderServiceType>;
  totalAmount = 0;

  constructor(private http: HttpClient) {
    this.orderSubject = new BehaviorSubject<OrderServiceType>(OrderServiceType.SHOPPING);
  }

  findAll(): Observable<OrderInterface[]> {
    return this.http.get<OrderInterface[]>(environment.apiUrl + '/api/orders/?projection=full');
  }

  findById(id): Observable<OrderInterface> {
    debugger
    return this.http.get<OrderInterface>(environment.apiUrl + '/api/orders/' + id + '?projection=full');
  }

  findOrderByUserUuidAndOrderId(uuid, orderId): Observable<any> {
    return this.http.get<any>(environment.apiUrl + '/api/orders/search/getByUser_uuidAndId?uuid=' + uuid + '&orderId=' + orderId + '&projection=full');
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/orders/', order);
  }

  onUpdate(id, order: Order): Observable<OrderInterface> {
    return this.http.put<OrderInterface>(environment.apiUrl + '/api/orders/' + id, order);
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

  public get getTotalAmount(): number {
    return this.totalAmount;
  }
}
