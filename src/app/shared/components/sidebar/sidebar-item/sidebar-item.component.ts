import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../../icons/svg-icon/svg-icon.component';

@Component({
  selector: 'shared-sidebar-item',
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './sidebar-item.component.html',
  styles: ``,
})
export class SidebarItemComponent {
  title = input.required<string>();
  link = input.required<string>();
  icon = input<string>();
}
