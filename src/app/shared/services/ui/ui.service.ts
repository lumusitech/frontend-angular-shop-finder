import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showMenuSignal = signal<boolean>(false);
  readonly showMenu = this.showMenuSignal.asReadonly();

  openMenu() {
    this.showMenuSignal.set(true);
  }
  closeMenu() {
    this.showMenuSignal.set(false);
  }

  setScrollStart() {
    window.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
  }
}
