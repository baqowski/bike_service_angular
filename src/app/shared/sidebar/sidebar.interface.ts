export interface SidebarInterface {
  name: string;
  routerLink: string;
  hrefId: string;
  href: string;
  subLinks: SidebarInterface[];
}
