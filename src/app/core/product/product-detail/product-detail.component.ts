import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../product.service';
import {mergeMap} from 'rxjs/operators';
import {Product} from '../product';
import {BasketService} from '../../../shared/basket/basket.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private basketService: BasketService,
              private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => this.productService.getById(Number(params.get('id'))))
    ).subscribe(value => {
      this.product = value;
    });
  }

  addProductToShoppingBasket(id: number): void {
    this.basketService.addProduct(id).subscribe(value => {
      this.toastr.success('Produkt został dodany do koszyka');
    }, error => {
      // toDo
    });
  }
}
