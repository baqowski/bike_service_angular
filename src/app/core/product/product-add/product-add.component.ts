import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductInterface} from '../product';
import {ProductService} from '../product.service';
import {catchError, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private toastrService: ToastrService) { }

  addForm: FormGroup;
  newProduct: ProductInterface;

  ngOnInit(): void {
      this.addForm = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        imageUrl: ['', Validators.required],
        color: ['', Validators.required],
        producer: ['', Validators.required],
      });
  }

  onSubmit(data: any): void {
    this.newProduct = data;
    this.productService.create(data).pipe(
      tap( (product: ProductInterface) => {
        this.toastrService.success('Product ' + product.name + ' został dodany');
      }), catchError(err => {
        this.toastrService.error(err.name);
        return err;
    })
    ).subscribe(() => {
    }, err => {
      this.toastrService.error(err);
      return err;
    });
  }

/*.subscribe(next => {
  this.isLoggedUser.emit();
  this.router.navigate(['/dashboard']);
},
error => {
  this.error = error;
  this.loading = false;
  this.toasterService.error('Error ' + error);
});*/

  get form(): any {
    return this.addForm.controls;
  }
}
