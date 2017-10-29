import { Injectable } from '@angular/core';

@Injectable()
export class ThemeSpinner {

  public _selector: string = 'preloader';
  public _element: HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  show(): void {
    this._element.style['display'] = 'block';
  }

  hide(delay: number = 0): void {
    setTimeout(() => {
      this._element.style['display'] = 'none';
    }, delay);
  }
}
