import { Component } from '@angular/core';
import { ShopCardComponent } from '@shop/shop-card/shop-card.component';

@Component({
  selector: 'app-shop-list',
  standalone: true,
  imports: [ShopCardComponent],
  templateUrl: './shop-list.component.html',
  styles: ``,
})
export class ShopListComponent {}
