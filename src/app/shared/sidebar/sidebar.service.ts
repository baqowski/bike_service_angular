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
      {
        name: 'Produkty', routerLink: '', href: '#products', hrefId: 'products', subLinks: [
          {
            name: 'Rowery', routerLink: '/products', href: '#bike', hrefId: 'bike', subLinks: [
              {name: 'Męskie', routerLink: '', href: '#bike', hrefId: '#bike'},
              {name: 'Damskie', routerLink: '', href: '', hrefId: ''},
              {name: 'Dziecięce', routerLink: '', href: '', hrefId: ''},
            ]
          },
          {name: 'Części', routerLink: '', href: '', hrefId: ''},
          {name: 'Akcesoria', routerLink: '', href: '', hrefId: ''}
        ]
      },
    ];
  }

  get onGetListNavigationUser(): SidebarInterface[] {
    return [
      {name: 'Usługi', routerLink: '', href: '#home', hrefId: 'home'},
      {name: 'Moje zamówienia', routerLink: '/orders', href: '', hrefId: ''},
      {name: 'Wypożyczenia', routerLink: '', href: '', hrefId: ''},
      {name: 'Naprawy', routerLink: '', href: '', hrefId: ''}
    ].concat(this.OnGetDefaultNavigation);
  }

  get onGetListNavigationWorker(): any {
    return [].concat(this.onGetListNavigationUser);
  }

  get onGetListNavigationAdmin(): any {
    return [
      {name: 'Produkty', routerLinK: '/products'},
      {name: 'Użytkownicy', routerLinK: '/test-component'},
      {name: 'Zarządzanie', routerLinK: '/management'}
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
