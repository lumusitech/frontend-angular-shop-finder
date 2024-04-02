import { Component, inject } from '@angular/core';
import { NavMenuService } from '@app/shared/services/nav-menu/nav-menu.service';
import { UiService } from '@app/shared/services/ui/ui.service';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'shared-sidebar-menu',
  standalone: true,
  imports: [SidebarItemComponent],
  templateUrl: './sidebar-menu.component.html',
  styles: ``,
})
export class SidebarMenuComponent {
  public readonly navMenuService = inject(NavMenuService);
  public readonly uiService = inject(UiService);
}
