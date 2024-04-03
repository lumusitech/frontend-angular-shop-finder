import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';
import { SvgIconComponent } from '../../icons/svg-icon/svg-icon.component';

@Component({
  selector: 'shared-menu-button',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './menu-button.component.html',
  styles: ``,
})
export class MenuButtonComponent {
  public readonly uiService = inject(UiService);
}
