import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styles: ``,
})
export class SvgIconComponent {
  iconName = input.required<string>();
}
