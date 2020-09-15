import {Subject} from 'rxjs';
import {ProductInterface} from '../../product/product';

export class LoanService {

  productLoan = new Subject<ProductInterface>();

}
