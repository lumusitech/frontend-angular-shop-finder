import { Component } from '@angular/core';
import { SearchIconComponent } from '../icons/search-icon/search-icon.component';

@Component({
  selector: 'shared-finder',
  standalone: true,
  imports: [SearchIconComponent],
  templateUrl: './finder.component.html',
  styles: ``,
})
export class FinderComponent {}
