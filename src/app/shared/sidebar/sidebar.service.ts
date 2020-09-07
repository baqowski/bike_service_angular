import {Injectable} from '@angular/core';
import {UserService} from '../../core/user/user.service';

@Injectable()
export class SidebarService {

  constructor(private userService: UserService) {
  }

  onGetUserRole(role: any): void {
    switch (role) {
      case 'ROLE_ADMIN' || 'ROLE_WORKER':
        return this.onGetAdminSidebar;
      default:
        return this.onGetNavigationUser;
    }
  }

  get onGetAdminSidebar(): any {
    return this.onGetNavigationUser.concat(this.onGetListNavigationAdmin);
  }

  get onGetNavigationUser(): any {
    return [
      {name: 'Usługi', routerLink: ''},
      {
        name: 'Produkty', routerLink: '', href: '#home', hrefId: 'home', subLinks: [
          {
            name: 'Rowery', routerLink: '/products', subLinks: [
              {name: 'Męskie', routerLink: '', href: '', hrefIf: ''},
              {name: 'Damskie', routerLink: '', href: '', hrefIf: ''},
              {name: 'Dziecięce', routerLink: '', href: '', hrefIf: ''},
            ]
          },
          {name: 'Części', routerLink: ''},
          {name: 'Akcesoria', routerLink: ''}
        ]
      },
      {name: 'Moje zamówienia', routerLink: '/orders', href: '', hrefId: '' },
      {name: 'Wypożyczenia', routerLink: '', href: '', hrefId: '' },
      {name: 'Naprawy', routerLink: '', href: '', hrefId: ''}
    ];
  }

  get onGetListNavigationAdmin(): any {
    return [
      {name: 'Produkty', routerLinK: '/products'},
      {name: 'Użytkownicy', routerLinK: '/test-component'},

    ];
  }
}
