import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from './order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: OrderInterface[];
    columns: any[] = [
      {id: '#'},
      {
        payments: [
          {id: 'Numer płatności'},
          {status: 'Status płatności'}
        ]
      },
      {amount: 'Kwota'},
      {type: 'Typ usługi'}
    ];
  columnName: string[] = [
    'nr zamówienia', 'kwota', 'status', 'rodzaj usługi', 'numer płatności', 'typ płatności'
  ];

  keys: string[] = [ 'id', 'amount', 'orderStatus', 'orderServiceType', 'payment.id' , 'payment.paymentType'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.orders = this.route.snapshot.data.order._embedded.orders;
  }

}
