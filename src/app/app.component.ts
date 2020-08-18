import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "./auth/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

 constructor(private router: Router, private auth: AuthService, private  toastr: ToastrService) {
   if (this.auth.currentUserValue) {
     this.router.navigate(['/dashboard'])
   }
 }

  ngOnInit(): void {

  }

  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
  }
}
