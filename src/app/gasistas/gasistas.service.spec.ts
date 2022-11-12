import { TestBed } from '@angular/core/testing';

import { GasistasService } from './gasistas.service';

describe('GasistasService', () => {
  let service: GasistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
