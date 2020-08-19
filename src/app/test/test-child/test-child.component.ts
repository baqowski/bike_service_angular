import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../../core/product/product';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {ProductService} from '../../core/product/product.service';
import {switchMap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit, AfterViewInit {

  product: Product;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    /*this.subscription = this.route.params.subscribe((params: Params) => {
      debugger
    });
    this.product = this.route.snapshot.data.testResolver;*/
  }

  ngOnInit(): void {
    debugger
    this.route.paramMap.pipe(switchMap(params => this.productService.getById(Number(params.get('id')))))
      .subscribe(data => {
        this.product = data;
        debugger
      });
    /*debugger
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.productService.getById(Number(params.get('id'))))
    );
    debugger*/

    /*debugger
    const id = this.route.snapshot.data.testResolver.id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      debugger
    });*/

    /*this.route.paramMap.pipe(switchMap(params => this.productService.getById(id)))
      .subscribe(data => {
        debugger
      });*/


      /*.switchMap(params => this.itemsSrv.getItems(params.get('cat')))
      .subscribe(data => {
        this.items=data;
      });*/
  }

  ngAfterViewInit(): void {
    this.subscription.unsubscribe();
    debugger
  }

}
