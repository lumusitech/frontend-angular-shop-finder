import { Component, inject, input, type OnInit } from '@angular/core';
import { SvgIconComponent } from '@app/shared/components/icons/svg-icon/svg-icon.component';
import { UiService } from '@app/shared/services/ui/ui.service';
import type { Shop } from '@app/shop/models/shop.interface';
import { ShopService } from '@app/shop/services/shop.service';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './shop-details.component.html',
  styles: ``,
})
export class ShopDetailsComponent implements OnInit {
  public readonly shopService = inject(ShopService);
  public readonly uiService = inject(UiService);

  shopId = input.required<number>({ alias: 'id' });
  shop!: Shop;

  ngOnInit(): void {
    console.log(this.shopId());
    this.shop = this.shopService.getById(this.shopId())!;
  }
}
