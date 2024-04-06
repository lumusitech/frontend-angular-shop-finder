import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';

@Component({
  selector: 'shared-email-form',
  standalone: true,
  imports: [],
  templateUrl: './email-form.component.html',
  styles: ``,
})
export class EmailFormComponent {
  public readonly uiService = inject(UiService);
}
