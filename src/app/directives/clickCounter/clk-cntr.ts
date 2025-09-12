import { Directive, EventEmitter, HostListener, Output,ElementRef} from '@angular/core';

@Directive({
  selector: '[appClkCntr]'
})
export class ClkCntr {

  private count = 0;
  private counterEl: HTMLElement;
 @Output() clicked = new EventEmitter<number>();

 constructor(private el: ElementRef) {

    this.counterEl = document.createElement('span');
    this.counterEl.style.display = 'block'; 
    this.counterEl.style.textAlign = 'center'; 
    this.counterEl.style.width = '50px';
    this.counterEl.style.margin = '0 auto';
    this.el.nativeElement.appendChild(this.counterEl);
 }


 @HostListener('click')
  onClick() {
    this.count++;
    this.counterEl.innerText = `(${this.count})`;
  }

}
