import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]'
})
export class BackGroundColor {

  constructor(private el: ElementRef) { }

  @HostListener('click') mouseClick(){
    this.el.nativeElement.style.backgroundColor ='#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
