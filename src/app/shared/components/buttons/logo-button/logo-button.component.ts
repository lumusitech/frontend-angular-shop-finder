import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShopIconComponent } from '../../icons/shop-icon/shop-icon.component';

@Component({
  selector: 'shared-logo-button',
  standalone: true,
  imports: [ShopIconComponent, RouterLink],
  templateUrl: './logo-button.component.html',
  styles: ``,
})
export class LogoButtonComponent {
  title = input('');
}
