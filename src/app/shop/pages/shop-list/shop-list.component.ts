import { Component, inject, type OnInit } from '@angular/core';
import type { Shop } from '@app/shop/models/shop.interface';
import { ShopService } from '@app/shop/services/shop.service';
import { ShopCardComponent } from '@shop/components/shop-card/shop-card.component';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [ShopCardComponent],
  templateUrl: './shop-list.component.html',
  styles: ``,
})
export class ShopListComponent implements OnInit {
  shops: Shop[] = [];
  private readonly _shopService = inject(ShopService);

  ngOnInit(): void {
    this.shops = this._shopService.getAll();
  }
}
