import {Injectable} from '@angular/core';
import {SidebarInterface} from './sidebar.interface';
import {UserInterface} from '../../core/user/user';

@Injectable()
export class SidebarService {

  onGetUserRole(user: UserInterface): SidebarInterface[] {
    if (user){
      switch (user.role.name) {
        case 'ROLE_USER':
          return this.onGetUerSidebar;
        case 'ROLE_WORKER':
          return this.onGetWorkerSidebar;
        case 'ROLE_ADMIN':
          return this.onGetAdminSidebar;
      }
      return this.OnGetDefaultNavigation;
    }
  }

  get OnGetDefaultNavigation(): SidebarInterface[] {
    debugger
    return [
      {
        name: 'Produkty', routerLink: '', href: '#products', hrefId: 'products', subLinks: [
          {name: 'Rowery', routerLink: 'categories/bicycles', href: '#home', hrefId: 'home'},
          {name: 'Akcesoria', routerLink: 'categories/accessories', href: '#home', hrefId: 'home'},
          {name: 'Pozostałe', routerLink: 'categories/others', href: '#home', hrefId: 'products'}
        ]
      }
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
