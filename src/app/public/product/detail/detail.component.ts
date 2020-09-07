import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../product.service';
import {mergeMap} from 'rxjs/operators';
import {ProductInterface} from '../product';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Output() productEmitter: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  product: ProductInterface;

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

  addProductToShoppingCard(product: ProductInterface): void {
    this.productEmitter.emit(product);
  }
}
