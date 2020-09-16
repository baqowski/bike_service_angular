import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DeliveryInterface} from './delivery';
import {DeliveryService} from './delivery.service';

@Injectable()
export class DeliveryResolver implements Resolve<DeliveryInterface>{

  constructor(private deliveryService: DeliveryService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.deliveryService.getDeliveryData();
  }
}
