import { ElementRef } from '@angular/core';
import { HideClick } from './hide-click';

describe('HideClick', () => {
  it('should create an instance', () => {
    const el = {nativeElement : document.createElement('div')}
    const directive = new HideClick(el as ElementRef);
    expect(directive).toBeTruthy();
  });
});
