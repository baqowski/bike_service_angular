import {Injectable} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Role} from '../../core/role/role';
import {SidebarInterface} from './sidebar.interface';

@Injectable()
export class SidebarService {

  sidebarInterface: SidebarInterface[];

  constructor(private userService: UserService) {
  }

  onGetUserRole(role: Role): SidebarInterface[] {
    switch (role.name) {
      case 'ROLE_ADMIN' || 'ROLE_WORKER':
        return this.onGetAdminSidebar;
      default:
        return this.onGetNavigationUser;
    }
  }

  get onGetGuestSidebar(): SidebarInterface[] {
    return [
      {name: 'Produkty', routerLink: '/products', subLinks: null, href: '', hrefId: ''}
    ];
  }

  get onGetAdminSidebar(): SidebarInterface[] {
    return this.onGetNavigationUser.concat(this.onGetListNavigationAdmin);
  }

  get onGetNavigationUser(): SidebarInterface[] {
    return [
      {name: 'Usługi', routerLink: '', href: '#home', hrefId: 'home'},
      {
        name: 'Produkty', routerLink: '', href: '#products', hrefId: 'products', subLinks: [
          {
            name: 'Rowery', routerLink: '', href: '#bike', hrefId: 'bike', subLinks: [
              {name: 'Męskie', routerLink: '/products', subLinks: null, href: '', hrefId: ''},
              {name: 'Damskie', routerLink: '', subLinks: null, href: '', hrefId: ''},
              {name: 'Dziecięce', routerLink: '', subLinks: null, href: '', hrefId: ''},
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

  get onGetListNavigationAdmin(): SidebarInterface[] {
    return [
      {name: 'Produkty', routerLink: '/products', subLinks: null, href: '', hrefId: ''},
      {name: 'Użytkownicy', routerLink: '/test-component', subLinks: null, href: '', hrefId: ''},
      {name: 'Zarządzanie', routerLink: '/management', subLinks: null, href: '', hrefId: ''}
    ];
  }
}
