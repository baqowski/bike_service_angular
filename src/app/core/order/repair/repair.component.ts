import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../order.service';
import {Order, OrderInterface, OrderServiceType} from '../order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit {

  repairForm: FormGroup;
  order: OrderInterface;

  constructor(private formBuilder: FormBuilder,
              private orderService: OrderService,
              private router: Router){
  }

  ngOnInit(): void {
    this.repairForm = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  onSubmit(description): void {
    this.order = new Order(null, null, null , OrderServiceType.REPAIR);
    this.order.description = description.value;
    this.orderService.createOrder(this.order) .subscribe(id => {
      this.router.navigate(['/orders/' + id]);
    });
  }
}
