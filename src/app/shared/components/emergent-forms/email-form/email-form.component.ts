import { Component, inject, input } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';
import type { Shop } from '@app/shop/models/shop.interface';

@Component({
  selector: 'shared-email-form',
  standalone: true,
  imports: [],
  templateUrl: './email-form.component.html',
  styles: ``,
})
export class EmailFormComponent {
  public readonly uiService = inject(UiService);

  shop = input.required<Shop>();
}
