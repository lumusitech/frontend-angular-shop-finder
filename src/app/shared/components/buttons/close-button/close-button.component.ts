import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui.service';
import { CloseIconComponent } from '../../icons/close-icon/close-icon.component';

@Component({
  selector: 'shared-close-button',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './close-button.component.html',
  styles: ``,
})
export class CloseButtonComponent {
  public readonly uiService = inject(UiService);
}
