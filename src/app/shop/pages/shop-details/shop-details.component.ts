import { Component, inject, input, type OnInit } from '@angular/core';
import type { Shop } from '@app/shop/models/shop.interface';
import { ShopService } from '@app/shop/services/shop.service';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [],
  templateUrl: './shop-details.component.html',
  styles: ``,
})
export class ShopDetailsComponent implements OnInit {
  public readonly shopService = inject(ShopService);

  shopId = input.required<number>({ alias: 'id' });
  shop?: Shop;

  ngOnInit(): void {
    console.log(this.shopId());
  }
}
