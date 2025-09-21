import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedCounter } from './mixed-counter';

describe('MixedCounter', () => {
  let component: MixedCounter;
  let fixture: ComponentFixture<MixedCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
