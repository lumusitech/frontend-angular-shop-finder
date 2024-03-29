import { Component, input } from '@angular/core';
import type { Shop } from '@app/shop/models/shop.interface';

@Component({
  selector: 'shop-card',
  standalone: true,
  imports: [],
  templateUrl: './shop-card.component.html',
  styles: ``,
})
export class ShopCardComponent {
  shop = input.required<Shop>();
}
