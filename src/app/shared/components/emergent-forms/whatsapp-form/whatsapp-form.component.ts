import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';

@Component({
  selector: 'shared-whatsapp-form',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-form.component.html',
  styles: ``,
})
export class WhatsappFormComponent {
  public readonly uiService = inject(UiService);
}
