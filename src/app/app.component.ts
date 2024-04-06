import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { EmailFormComponent } from './shared/components/emergent-forms/email-form/email-form.component';
import { WhatsappFormComponent } from './shared/components/emergent-forms/whatsapp-form/whatsapp-form.component';
import { SvgIconComponent } from './shared/components/icons/svg-icon/svg-icon.component';
import { OverlayComponent } from './shared/components/overlay/overlay.component';
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
    EmailFormComponent,
    OverlayComponent,
    EmailFormComponent,
    WhatsappFormComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly uiService = inject(UiService);
}
