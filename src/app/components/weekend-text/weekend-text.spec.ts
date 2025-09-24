import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendText } from './weekend-text';

describe('WeekendText', () => {
  let component: WeekendText;
  let fixture: ComponentFixture<WeekendText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekendText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekendText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
