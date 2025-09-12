import { ClkCntr } from './clk-cntr';
import { ElementRef } from '@angular/core';

describe('ClkCntr', () => {
  it('should create an instance', () => {
    const el = { nativeElement: document.createElement('div') };
    const directive = new ClkCntr(el as ElementRef);
    expect(directive).toBeTruthy();
  });
});
