import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductInterface} from '../../../product/product';
import {LoanService} from './loan.service';
import {OrderService} from '../../order.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  @Input() product: ProductInterface;
  @Input() loanForm: FormGroup;
  @Output() loanFormChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  total = 0;
  days = 1;

  constructor(private loanService: LoanService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.loanForm.addControl('loan', new FormGroup({
      days: new FormControl('', Validators.required),
    }));
  }

  calculateLoan(days: any,  product: ProductInterface): void {
    this.loanService.calculateLoanAmount(days, product);
    this.loanService.loanAmount.subscribe(value => this.total = value);
  }

  onClickIncrementLoanDay(days: number, product: ProductInterface): void {
    this.days = days + 1;
    this.calculateLoan(this.days, product);
  }

  onClickDecrementLoanDay(days: number, product: ProductInterface): void {
    this.days = days - 1;
    this.calculateLoan(this.days, product);
  }
}
