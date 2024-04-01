import { Component } from '@angular/core';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

interface NavbarItem {
  title: string;
  link: string;
  icon?: SVGAElement;
}

const navbar: NavbarItem[] = [
  {
    title: 'dashboard',
    link: 'dashboard',
  },
  {
    title: 'contacto',
    link: 'contact-us',
  },
  {
    title: 'negocios',
    link: 'shop/list',
  },
];

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  public readonly navbarItems = navbar;
}
