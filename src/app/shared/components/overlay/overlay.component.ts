import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';

@Component({
  selector: 'shared-overlay',
  standalone: true,
  imports: [NgClass],
  templateUrl: './overlay.component.html',
  styles: ``,
})
export class OverlayComponent {
  public readonly uiService = inject(UiService);
}
