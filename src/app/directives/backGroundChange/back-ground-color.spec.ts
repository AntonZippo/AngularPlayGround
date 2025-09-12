import { BackGroundColor } from './back-ground-color';
import { ElementRef } from '@angular/core';

describe('BackGroundColor', () => {
  it('should create an instance', () => {
    const el = { nativeElement: document.createElement('div') };
    const directive = new BackGroundColor(el as ElementRef);
    expect(directive).toBeTruthy();
  });
});
