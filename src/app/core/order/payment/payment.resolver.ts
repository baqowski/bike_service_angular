import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {OrderService} from "../order.service";
import {PaymentInterface} from "./payment";


@Injectable()
export class PaymentResolver implements Resolve<PaymentInterface>{
  constructor(private orderService: OrderService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaymentInterface> | Promise<PaymentInterface> | PaymentInterface {
    return this.orderService.getOrderPayment(route.params.id);
  }


}
