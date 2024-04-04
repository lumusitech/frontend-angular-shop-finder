import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from '@app/shared/components/icons/svg-icon/svg-icon.component';
import type { Shop } from '@app/shop/models/shop.interface';

@Component({
  selector: 'shop-card',
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
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
