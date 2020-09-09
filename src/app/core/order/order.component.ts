import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from './order';
import {TableStructureInterface} from '../../shared/table/table-structure.interface';
import {orderTableStructure} from './order-structure-interface';
import {UserService} from '../user/user.service';
import {OrderService} from './order.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: OrderInterface[];
  orderTableStructureColumns: Array<TableStructureInterface> = orderTableStructure;
  roleName: string;


  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    debugger
    this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid)
      .subscribe((role: any) => {
        this.roleName = role.role.name;
      });

    this.getUserRoleData(this.roleName).subscribe(orders => {
      this.orders = orders;
    });
    /* this.onGetUserRole();
     this.checkUserRole(this.roleName);
     this.orders = this.route.snapshot.data.order._embedded.orders;*/

  }

  getUserRoleData(role): Observable<OrderInterface[]> {
    if (role === 'USER') {
      return this.userService.findUserOrders(this.userService.findUserOrders(this.userService.getUserValue().uuid));
    }
    return this.orderService.findAll();
  }

  onGetUserRole(): void {

  }

  /*  getUserOrders(): void {
      this.userService.findUserOrders(this.userService.findUserOrders(this.userService.getUserValue().uuid)).pipe(
        tap(orders => {
          debugger;
          this.orders = orders;
        })
      ).subscribe();
    }*/

  /*  setAll(): void {
      this.orderService.findAll().pipe(
        tap(orders => {
          debugger;
          this.orders = orders;
        })
      ).subscribe();
    }*/
}
