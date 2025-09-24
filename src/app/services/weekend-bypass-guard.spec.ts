import { TestBed } from '@angular/core/testing';

import { WeekendBypassGuard } from './weekend-bypass-guard';

describe('WeekendBypassGuard', () => {
  let service: WeekendBypassGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekendBypassGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
