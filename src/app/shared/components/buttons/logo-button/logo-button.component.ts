import { Component, input } from '@angular/core';
import { ShopIconComponent } from '../../icons/shop-icon/shop-icon.component';

@Component({
  selector: 'shared-logo-button',
  standalone: true,
  imports: [ShopIconComponent],
  templateUrl: './logo-button.component.html',
  styles: ``,
})
export class LogoButtonComponent {
  title = input('');
}
