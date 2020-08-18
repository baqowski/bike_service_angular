import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Product} from "../product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<any>;

  product: Product;
  id: number;
  name: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getById(id).subscribe(data => {
      this.product = data;
      debugger;
    })

  }

  ngOnInit() {
    debugger
    this.getProduct();
    /*this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        let id = params.get('id');
        return this.productService.getById(+id)
      })
    ).subscribe()*/
  }

}
