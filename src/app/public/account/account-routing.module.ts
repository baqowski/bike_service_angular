import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AccountComponent} from './account.component';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: '/change-password',
    loadChildren: () => import('./change-password/change-password.module').then(module => module.ChangePasswordModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {

}
