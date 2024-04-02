import { Component, inject } from '@angular/core';
import { NavMenuService } from '@app/shared/services/nav-menu/nav-menu.service';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  public readonly navMenuService = inject(NavMenuService);
}
