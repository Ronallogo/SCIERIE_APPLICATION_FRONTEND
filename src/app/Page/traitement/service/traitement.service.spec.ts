import { TestBed } from '@angular/core/testing';

import { TraitementService } from './traitement.service';

describe('TraitementService', () => {
  let service: TraitementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraitementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
