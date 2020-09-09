import {Injectable} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {SidebarInterface} from './sidebar.interface';

@Injectable()
export class SidebarService {

  sidebarInterface: SidebarInterface[];

  constructor(private userService: UserService) {
  }

  onGetUserRole(role: any): SidebarInterface[] {
    switch (role.role.name) {
      case 'ROLE_USER': {
        this.sidebarInterface = this.onGetUerSidebar;
        break;
      }
      case 'ROLE_WORKER': {
        this.sidebarInterface = this.onGetWorkerSidebar;
        break;
      }
      case 'ROLE_ADMIN': {
        this.sidebarInterface = this.onGetAdminSidebar;
        break;
      }
    }
    return this.sidebarInterface;
  }

  get OnGetDefaultNavigation(): SidebarInterface[] {
    return [
      {name: 'Rowery', routerLink: ':bikes', href: '#products', hrefId: 'products'},
      {name: 'Akcesoria', routerLink: ':accessories', href: '#products', hrefId: 'products'},
      {name: 'Pozostałe', routerLink: ':other', href: '#products', hrefId: 'products'}

    ];
  }

  get onGetListNavigationUser(): SidebarInterface[] {
    return [
      {name: 'Moje zamówienia', routerLink: '/orders', href: '', hrefId: ''},
    ].concat(this.OnGetDefaultNavigation);
  }

  get onGetListNavigationWorker(): any {
    return [].concat(this.onGetListNavigationUser);
  }

  get onGetListNavigationAdmin(): any {
    return [
      {
        name: 'Administrator', routerLinK: '', href: '#settings', hrefId: 'settings', subLinks: [
          {name: 'Produkty', routerLink: '/products', href: '#bike', hrefId: 'bike'},
          {name: 'Użytkownicy', routerLink: '/products', href: '#bike', hrefId: 'bike'},
          {name: 'Zamówienia', routerLink: '/orders', href: '#bike', hrefId: 'bike'},
        ]
      },
    ].concat(this.onGetListNavigationWorker);
  }

  get onGetUerSidebar(): SidebarInterface[] {
    return this.onGetListNavigationUser;
  }

  get onGetWorkerSidebar(): SidebarInterface[] {
    return this.onGetListNavigationWorker;
  }

  get onGetAdminSidebar(): SidebarInterface[] {
    return this.onGetListNavigationAdmin;
  }


}
