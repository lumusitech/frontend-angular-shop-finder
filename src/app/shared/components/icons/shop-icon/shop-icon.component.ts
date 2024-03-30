import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-shop-icon',
  standalone: true,
  imports: [],
  templateUrl: './shop-icon.component.html',
  styles: ``,
})
export class ShopIconComponent {
  title = input('');
}
