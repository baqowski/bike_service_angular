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
          {name: 'Rowery', routerLink: '/products'},
          {name: 'Części i akcesoria', routerLink: ''}]
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
