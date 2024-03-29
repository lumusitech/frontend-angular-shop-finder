import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shop-icon',
  standalone: true,
  imports: [],
  templateUrl: './shop-icon.component.html',
  styles: ``,
})
export class ShopIconComponent {
  shopIcon = input('shopIcon', { alias: 'shop-icon' });
}
