import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {mergeMap} from 'rxjs/operators';
import {ProductInterface} from '../../core/product/product';
import {ProductService} from '../../core/product/product.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {

  products: ProductInterface[];

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => this.productService.findAllByProductCategory(params.get('category')))
    ).subscribe(products => {
      this.products = products;
    });
  }

}
