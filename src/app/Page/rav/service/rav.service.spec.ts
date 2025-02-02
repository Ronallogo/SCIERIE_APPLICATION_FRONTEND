import { TestBed } from '@angular/core/testing';

import { RavService } from './rav.service';

describe('RavService', () => {
  let service: RavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
