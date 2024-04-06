import { SlicePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from '@app/shared/components/icons/svg-icon/svg-icon.component';
import { UiService } from '@app/shared/services/ui/ui.service';
import type { Shop } from '@app/shop/models/shop.interface';

@Component({
  selector: 'shop-card',
  standalone: true,
  imports: [RouterLink, SvgIconComponent, SlicePipe],
  templateUrl: './shop-card.component.html',
  styles: ``,
})
export class ShopCardComponent {
  private readonly router = inject(Router);
  public readonly uiService = inject(UiService);

  shop = input.required<Shop>();

  onclick() {
    this.router.navigate(['shop', this.shop().id]);
    this.uiService.setScrollStart();
  }
}
