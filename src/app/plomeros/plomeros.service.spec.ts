import { TestBed } from '@angular/core/testing';

import { PlomerosService } from './plomeros.service';

describe('PlomerosService', () => {
  let service: PlomerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlomerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
