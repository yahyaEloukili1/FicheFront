import { TestBed } from '@angular/core/testing';

import { PdiServiceService } from './pdi-service.service';

describe('PdiServiceService', () => {
  let service: PdiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
