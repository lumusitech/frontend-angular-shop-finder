import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';
import { MenuIconComponent } from '../../icons/menu-icon/menu-icon.component';

@Component({
  selector: 'shared-menu-button',
  standalone: true,
  imports: [MenuIconComponent],
  templateUrl: './menu-button.component.html',
  styles: ``,
})
export class MenuButtonComponent {
  public readonly uiService = inject(UiService);
}
