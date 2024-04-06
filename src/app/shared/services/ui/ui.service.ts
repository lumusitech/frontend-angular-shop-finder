import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showMenuSignal = signal<boolean>(false);
  readonly showMenu = this.showMenuSignal.asReadonly();

  private showWhatsappFormSignal = signal<boolean>(false);
  readonly showWhatsappForm = this.showWhatsappFormSignal.asReadonly();

  private showEmailFormSignal = signal<boolean>(false);
  readonly showEmailForm = this.showEmailFormSignal.asReadonly();

  isModalOpen(): boolean {
    return (
      this.showMenu() || this.showWhatsappForm() || this.showEmailFormSignal()
    );
  }

  openMenu() {
    this.showMenuSignal.set(true);
  }
  closeMenu() {
    this.showMenuSignal.set(false);
  }

  openWhatsappForm() {
    this.showWhatsappFormSignal.set(true);
  }

  closeWhatsappForm() {
    this.showWhatsappFormSignal.set(false);
  }

  openEmailForm() {
    this.showEmailFormSignal.set(true);
  }

  closeEmailForm() {
    this.showEmailFormSignal.set(false);
  }

  setScrollStart() {
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  }
}
