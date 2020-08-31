import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../product.service';
import {mergeMap} from 'rxjs/operators';
import {Product} from '../product';
import {ToastrService} from 'ngx-toastr';
import {ProductResolver} from '../product.resolver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Output() productEmitter: EventEmitter<Product> = new EventEmitter<Product>();
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private toasterService: ToastrService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => this.productService.getById(Number(params.get('id'))))
    ).subscribe(value => {
      this.product = value;
    });
  }

  addProductToShoppingCard(product: Product): void {
    this.productEmitter.emit(product);
  }
}
