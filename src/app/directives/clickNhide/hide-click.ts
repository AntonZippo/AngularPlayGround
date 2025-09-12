import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideClick]'
})
export class HideClick {
  private hidden = false;

  constructor(private el: ElementRef) {}

  @HostListener('dblclick')
  toggleVisibility() {
    this.hidden = !this.hidden;
    this.el.nativeElement.style.display = this.hidden ? 'none' : '';
  }
}