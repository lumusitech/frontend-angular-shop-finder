import { Component } from '@angular/core';
import { LogoButtonComponent } from '../buttons/logo-button/logo-button.component';
import { MenuButtonComponent } from '../buttons/menu-button/menu-button.component';
import { FinderComponent } from '../finder/finder.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'shared-header',
  standalone: true,
  imports: [
    LogoButtonComponent,
    NavbarComponent,
    FinderComponent,
    MenuButtonComponent,
  ],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {}
