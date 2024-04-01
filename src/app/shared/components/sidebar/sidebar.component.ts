import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui.service';
import { CloseButtonComponent } from '../buttons/close-button/close-button.component';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CloseButtonComponent, NgClass],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  public readonly uiService = inject(UiService);
}
