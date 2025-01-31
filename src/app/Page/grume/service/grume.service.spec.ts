import { TestBed } from '@angular/core/testing';

import { GrumeService } from './grume.service';

describe('GrumeService', () => {
  let service: GrumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
