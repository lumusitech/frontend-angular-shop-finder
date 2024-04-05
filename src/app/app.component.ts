import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { SvgIconComponent } from './shared/components/icons/svg-icon/svg-icon.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { UiService } from './shared/services/ui/ui.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CommonModule,
    SvgIconComponent,
    CarouselComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly uiService = inject(UiService);
}
