import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirCheck } from './dir-check';

describe('DirCheck', () => {
  let component: DirCheck;
  let fixture: ComponentFixture<DirCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
