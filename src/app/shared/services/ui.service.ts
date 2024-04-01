import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showMenuSignal = signal<boolean>(false);
  readonly showMenu = this.showMenuSignal.asReadonly();

  openMenu() {
    this.showMenuSignal.set(true);
    console.log(this.showMenuSignal());
  }
  closeMenu() {
    this.showMenuSignal.set(false);
    console.log(this.showMenuSignal());
  }
}
