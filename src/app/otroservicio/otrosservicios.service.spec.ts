import { TestBed } from '@angular/core/testing';

import { OtrosserviciosService } from './otrosservicios.service';

describe('OtrosserviciosService', () => {
  let service: OtrosserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtrosserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
