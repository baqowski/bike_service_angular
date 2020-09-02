import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeliveryInterface} from './delivery';
import {DeliveryService} from './delivery.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  @Output() emitValue: EventEmitter<DeliveryInterface> = new EventEmitter<DeliveryInterface>();
  deliveries: DeliveryInterface[] = [];

  constructor(private deliveryService: DeliveryService) {

  }

  ngOnInit(): void {
    debugger
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
    debugger
    this.emitValue.emit(value);
  }
}
