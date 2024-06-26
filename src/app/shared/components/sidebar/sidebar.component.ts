import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UiService } from '@app/shared/services/ui/ui.service';
import { CloseButtonComponent } from '../buttons/close-button/close-button.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [
    CloseButtonComponent,
    NgClass,
    NavbarComponent,
    SidebarMenuComponent,
  ],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  public readonly uiService = inject(UiService);
}
