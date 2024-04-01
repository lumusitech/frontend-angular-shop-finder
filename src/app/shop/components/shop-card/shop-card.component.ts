import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import type { Shop } from '@app/shop/models/shop.interface';

@Component({
  selector: 'shop-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop-card.component.html',
  styles: ``,
})
export class ShopCardComponent {
  router = inject(Router);
  shop = input.required<Shop>();

  onclick() {
    this.router.navigate(['shop', this.shop().id]);
  }
}
