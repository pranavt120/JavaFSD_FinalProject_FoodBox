import { TestBed } from '@angular/core/testing';

import { ListCusineService } from './list-cusine.service';

describe('ListCusineService', () => {
  let service: ListCusineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCusineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
