import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxBtn } from './rx-btn';

describe('RxBtn', () => {
  let component: RxBtn;
  let fixture: ComponentFixture<RxBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
