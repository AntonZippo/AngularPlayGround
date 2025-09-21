import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCounter } from './local-counter';

describe('LocalCounter', () => {
  let component: LocalCounter;
  let fixture: ComponentFixture<LocalCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
