import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from './order';
import {TableStructureInterface} from '../../shared/table/table-structure.interface';
import {orderTableStructure} from './order-structure-interface';
import {Role} from '../role/role';
import {UserService} from '../user/user.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: OrderInterface[];
  orderTableStructureColumns: Array<TableStructureInterface> = orderTableStructure;
  role: Role;


  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    debugger
     this.userService.onGetUserRoleByUuid(this.userService.getUserValue().uuid).pipe(
      tap((role: Role) => {
        debugger
        this.role = role;
      })
    ).subscribe();
    this.orders = this.route.snapshot.data.order._embedded.orders;
  }
}
