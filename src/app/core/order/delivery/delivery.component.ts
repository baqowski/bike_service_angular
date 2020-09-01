import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeliveryInterface} from './delivery';
import {PaymentType} from '../../payment/payment-type/payment-type';
import {DeliveryService} from './delivery.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  @Output() emitValue: EventEmitter<DeliveryInterface> = new EventEmitter<DeliveryInterface>();
  deliveries: DeliveryInterface[] = [];

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService.getAll().pipe(
      map((value: any) => {
        debugger;
        return value._embedded.deliveries.map((delivery) => {
          debugger
          return delivery.type + '  ' + delivery.cost + ' zł' ;
        });
      })
    )
      .subscribe(deliveries => {
      this.deliveries = deliveries;
      console.log(this.deliveries);
    });
  }

  getSelectedValue(value): any {
    this.emitValue.emit(value);
  }

  /*onEmitDeliver(delivery): void {
    debugger
    this.emitValue.emit(delivery);
  }*/
}
