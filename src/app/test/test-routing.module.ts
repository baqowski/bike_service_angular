import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test.component";
import {TestChildComponent} from "./test-child/test-child.component";
import {TestResolver} from "./test.resolver";

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
  {
    path: ':id',
    component: TestChildComponent,
    resolve: {
      testResolver: TestResolver
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {

}
