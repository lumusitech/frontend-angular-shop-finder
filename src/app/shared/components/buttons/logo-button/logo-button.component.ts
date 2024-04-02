import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../../icons/svg-icon/svg-icon.component';

@Component({
  selector: 'shared-logo-button',
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './logo-button.component.html',
  styles: ``,
})
export class LogoButtonComponent {
  title = input('');
}
