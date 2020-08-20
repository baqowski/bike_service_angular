import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
 /* {
    path: '',
    component: TestComponent,
    resolve: {
      testResolver: TestResolver
    }
  },
  {
    path: ':id',
    component: TestChildComponent,
    resolve: {
      testResolver: TestResolver
    }
  }*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {

}
