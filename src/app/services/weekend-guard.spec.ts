import { TestBed } from '@angular/core/testing';

import { WeekendGuard } from './weekend-guard';

describe('WeekendGuard', () => {
  let service: WeekendGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekendGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
