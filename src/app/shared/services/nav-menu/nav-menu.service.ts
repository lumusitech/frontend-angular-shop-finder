import { Injectable, signal } from '@angular/core';

interface NavMenuItems {
  title: string;
  link: string;
  icon?: string;
}

const navMenuItems: NavMenuItems[] = [
  {
    title: 'comercios',
    link: 'shop/list',
    icon: 'shop',
  },
  {
    title: 'contacto',
    link: 'contact-us',
    icon: 'contact',
  },
  {
    title: 'admin',
    link: 'dashboard',
    icon: 'config',
  },
];

@Injectable({
  providedIn: 'root',
})
export class NavMenuService {
  private navItemsSignal = signal<NavMenuItems[]>(navMenuItems);
  readonly navItems = this.navItemsSignal.asReadonly();
}
