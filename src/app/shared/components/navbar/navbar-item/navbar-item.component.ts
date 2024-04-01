import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-navbar-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-item.component.html',
  styles: ``,
})
export class NavbarItemComponent {
  title = input.required<string>();
  link = input.required<string>();
}
