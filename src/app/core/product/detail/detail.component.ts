import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {mergeMap} from 'rxjs/operators';
import {ProductInterface} from '../product';
import {ShoppingCartService} from '../../../public/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Output() productEmitter: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  product: ProductInterface;

  constructor(private route: ActivatedRoute,
              private shoppingCartService: ShoppingCartService,
              private router: Router,
              private productService: ProductService) {
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

  onGoToLoan(): void {
    this.router.navigate(['/loan']);
  }
}
