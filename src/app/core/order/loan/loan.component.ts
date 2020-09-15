import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DeliveryInterface} from '../summary/delivery/delivery';
import {ActivatedRoute} from '@angular/router';
import {DeliveryComponent} from '../summary/delivery/delivery.component';
import {ProductInterface} from '../../product/product';
import {LoanService} from './loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  @Input() product: ProductInterface;
  @ViewChild(DeliveryComponent) deliveryRef: DeliveryComponent;
  loanForm: FormGroup;
  deliverySelectData: DeliveryInterface[];
  orderSummaryPrice = 0;
  productSummaryPrice: number;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private loanService: LoanService) {
  }

  ngOnInit(): void {
    debugger
   /* this.deliverySelectData = this.route.snapshot.data.delivery._embedded.deliveries;*/
    this.loanForm = this.formBuilder.group({});
    this.loanService.productLoan.subscribe(value => {
      debugger
      this.product = value;
    });
  }

  onGetDeliveryCost(): void {
    this.orderSummaryPrice = this.productSummaryPrice + this.deliveryRef.selectedPrice;
  }
}
