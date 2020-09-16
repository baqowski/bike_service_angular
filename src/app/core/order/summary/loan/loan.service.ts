import {BehaviorSubject} from 'rxjs';
import {ProductInterface} from '../../../product/product';

export class LoanService {

  loanAmount: BehaviorSubject<any>;
  total = 0;

  constructor() {
    this.loanAmount = new BehaviorSubject<any>(this.total);
  }

  public calculateLoanAmount(days, product: ProductInterface): void {
    this.loanAmount.next(days * product.loanDayPrice);
  }
}
