import { TestBed } from '@angular/core/testing';

import { ElectricistasService } from './electricistas.service';

describe('ElectricistasService', () => {
  let service: ElectricistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
