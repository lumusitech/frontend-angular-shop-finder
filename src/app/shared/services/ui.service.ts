import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showMenuSignal = signal<boolean>(false);
  readonly showMenu = this.showMenuSignal.asReadonly();

  openMenu() {
    console.log(this.showMenuSignal());
  }
  closeMenu() {
    console.log(this.showMenuSignal());
  }
}
