import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from './order';
import {TableStructureInterface} from '../../shared/table/table-structure.interface';
import {orderTableStructure} from './order-structure-interface';
import {UserService} from '../user/user.service';
import {OrderService} from './order.service';
import {UserInterface} from '../user/user';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, AfterViewInit {

  orders: OrderInterface[];
  orderTableStructureColumns: Array<TableStructureInterface> = orderTableStructure;
  user: UserInterface;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private orderService: OrderService) {

  }

  ngOnInit(): void {
    debugger
    this.user = this.route.snapshot.data.user;
    this.setOrderByUserRole();

  }

  ngAfterViewInit(): void {


  }

  private setOrderByUserRole(): void {
    debugger
    if (this.userService.current.role.name === "ROLE_USER") {
      this.orders = this.route.snapshot.data.order._embedded.orders;
    } else {
      this.orderService.findAll().pipe(
        tap(orders => {
          debugger
          this.orders = orders
        })
      ).subscribe()
    }

  }
}
