import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import {ToastrService} from "ngx-toastr";
import {catchError, tap} from "rxjs/operators";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  @Output() emitValueToParent: EventEmitter<Product> = new EventEmitter<Product>();
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      filename: ['', Validators.required]
    });

  }


  onSubmit(data): void {
    debugger
    this.productService.add(data).pipe(
      tap(response => {
        debugger
        this.emitValueToParent.emit(response);
      }),
      tap(value => {
        this.toastrService.success("Produkt " + value.name + " został dodany")
      }),
      catchError(err => err),
    ).subscribe();
  }

  onAddProduct(product: Product): void {

  }

  get form(): any {
    return this.form.controls
  }

  onSelectFile(image: string | SVGImageElement) {
    debugger

  }
}
