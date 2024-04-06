import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  onClick() {
    console.log('clicked');
  }
}
