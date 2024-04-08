import { Component, inject, input } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';
import type { Shop } from '@app/shop/models/shop.interface';

@Component({
  selector: 'shared-whatsapp-form',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-form.component.html',
  styles: ``,
})
export class WhatsappFormComponent {
  public readonly uiService = inject(UiService);

  shop = input.required<Shop>();
}
