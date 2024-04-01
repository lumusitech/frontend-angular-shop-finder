import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-close-icon',
  standalone: true,
  imports: [],
  templateUrl: './close-icon.component.html',
  styles: ``,
})
export class CloseIconComponent {
  width = input.required<number>();
  height = input.required<number>();
}
