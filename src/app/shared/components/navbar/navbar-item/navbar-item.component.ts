import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../../icons/svg-icon/svg-icon.component';

@Component({
  selector: 'shared-navbar-item',
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './navbar-item.component.html',
  styles: ``,
})
export class NavbarItemComponent {
  title = input.required<string>();
  link = input.required<string>();
  icon = input<string>();
}
