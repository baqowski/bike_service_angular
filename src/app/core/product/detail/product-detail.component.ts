import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {mergeMap} from 'rxjs/operators';
import {ProductInterface} from '../product';
import {ShoppingCartService} from '../../../public/shopping-cart/shopping-cart.service';
import {LoanService} from '../../order/summary/loan/loan.service';
import {OrderService} from '../../order/order.service';
import {OrderServiceType} from '../../order/order';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Output() productEmitter: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  product: ProductInterface;

  constructor(private route: ActivatedRoute,
              private shoppingCartService: ShoppingCartService,
              private router: Router,
              private productService: ProductService,
              private loanService: LoanService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => this.productService.getById(Number(params.get('id'))))
    ).subscribe(value => {
      this.product = value;
      this.product.quantity = 1;
    });
  }

  addProductToShoppingCard(product: ProductInterface): void {
    this.shoppingCartService.addProduct(product);
    this.shoppingCartService.behaviorProducts.next(this.shoppingCartService.getProductsValue);
  }

  onGoToLoan(product: ProductInterface): void {
    this.orderService.orderSubject.next(OrderServiceType.RENT);
    // tslint:disable-next-line:prefer-const
    let data: ProductInterface[] = [];
    data.push(product);
    this.shoppingCartService.behaviorProducts.next(data);
    /*this.router.navigate(['summary']);*/
  }
}
