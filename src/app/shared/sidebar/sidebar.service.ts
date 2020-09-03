import {Injectable} from '@angular/core';

@Injectable()
export class SidebarService {

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
    ];
  }

  get onGetListNavigationAdmin(): any {
    return [
      {name: 'Produkty', routerLinK: '/products'},
      {name: 'Użytkownicy', routerLinK: '/test-component'},
    ];
  }
}
