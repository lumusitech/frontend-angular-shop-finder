import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';
import { SvgIconComponent } from '../../icons/svg-icon/svg-icon.component';

@Component({
  selector: 'shared-close-button',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './close-button.component.html',
  styles: ``,
})
export class CloseButtonComponent {
  public readonly uiService = inject(UiService);
}
