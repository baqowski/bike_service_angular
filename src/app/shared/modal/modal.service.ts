import {ComponentFactoryResolver, Inject, Injectable} from '@angular/core';
import {BodyComponent} from './body/body.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private rootViewContainer: any;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  // tslint:disable-next-line:typedef
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  // tslint:disable-next-line:typedef
  addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(BodyComponent);
    const component = factory.create(this.rootViewContainer._parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
