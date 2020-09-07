import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {PaymentInterface} from '../../payment/payment';
import {OrderService} from '../order.service';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';


@Injectable()
export class PaymentResolver implements Resolve<PaymentInterface> {
  constructor(private orderService: OrderService,
              private toastrService: ToastrService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<PaymentInterface> | PaymentInterface {
    return this.orderService.getOrderPayment(route.params.orderId, route.params.paymentId).pipe(
      catchError(err => {
        this.toastrService.error(err.error.message, err.error.error.message);
        return err;
      })
    );
  }


}
