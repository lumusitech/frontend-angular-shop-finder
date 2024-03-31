import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-menu-icon',
  standalone: true,
  imports: [],
  templateUrl: './menu-icon.component.html',
  styles: ``,
})
export class MenuIconComponent {
  width = input.required<number>();
  height = input.required<number>();
}
