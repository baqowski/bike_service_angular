import {Component, OnInit} from '@angular/core';
import {Product} from '../../core/product/product';
import {HttpClient} from '@angular/common/http';
import {BasketService} from './basket.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient,
              private basketService: BasketService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.basketService.getProducts()
      .pipe(first())
      .subscribe(value =>  {
        this.products = value;
      });
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter(i => i !== product);
  }

  goToProduct(id: number): void {
    this.router.navigate(['test/' + id], {relativeTo: this.activatedRoute});
  }

/*  public getProducts(): Observable<Product[]> {
    debugger
    return this.basketService.getProducts().pipe(
      first()).subscribe(value => this.products = value)
  )*/
}



