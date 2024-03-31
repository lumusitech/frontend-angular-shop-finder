import { Component } from '@angular/core';
import { MenuIconComponent } from '../../icons/menu-icon/menu-icon.component';

@Component({
  selector: 'shared-menu-button',
  standalone: true,
  imports: [MenuIconComponent],
  templateUrl: './menu-button.component.html',
  styles: ``,
})
export class MenuButtonComponent {}
