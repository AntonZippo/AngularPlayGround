import { TestBed } from '@angular/core/testing';

import { Weekendanalytics } from './weekendanalytics';

describe('Weekendanalytics', () => {
  let service: Weekendanalytics;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weekendanalytics);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
