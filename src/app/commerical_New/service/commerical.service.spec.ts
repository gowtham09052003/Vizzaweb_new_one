import { TestBed } from '@angular/core/testing';

import { CommericalService } from './commerical.service';

describe('CommericalService', () => {
  let service: CommericalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommericalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
