import { TestBed } from '@angular/core/testing';

import { ServicePrincipal } from './service-principal.service';

describe('ServicePrincipalService', () => {
  let service: ServicePrincipal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePrincipal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
