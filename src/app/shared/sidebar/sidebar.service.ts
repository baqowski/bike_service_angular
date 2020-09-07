import {Injectable} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Role} from '../../core/role/role';
import {SidebarInterface} from './sidebar.interface';

@Injectable()
export class SidebarService {

  sidebarInterface: SidebarInterface[];

  constructor(private userService: UserService) {
  }


  onGetUserRole(role: Role): void {

    switch (role.name) {
      case 'ROLE_ADMIN' || 'ROLE_WORKER':
        this.sidebarInterface = this.onGetAdminSidebar;
      // tslint:disable-next-line:no-switch-case-fall-through
      default:
        this.sidebarInterface = this.onGetNavigationUser;
    }
  }

  get onGetAdminSidebar(): SidebarInterface[] {
    debugger
    return this.onGetNavigationUser.concat(this.onGetListNavigationAdmin);
  }

  get onGetNavigationUser(): SidebarInterface[] {
    return [
      {name: 'Usługi', routerLink: '', href: '#home', hrefId: 'home'},
      {name: 'Produkty', routerLink: '', href: '#products', hrefId: 'products', subLinks: [
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
      {name: 'Moje zamówienia', routerLink: '/orders', href: '', hrefId: ''},
      {name: 'Wypożyczenia', routerLink: '', href: '', hrefId: ''},
      {name: 'Naprawy', routerLink: '', href: '', hrefId: ''}
    ];
  }

  get onGetListNavigationAdmin(): any {
    return [
      {name: 'Produkty', routerLinK: '/products'},
      {name: 'Użytkownicy', routerLinK: '/test-component'},
      {name: 'Zarządzanie', routerLinK: '/management'}
    ];
  }
}
