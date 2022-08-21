import { TestBed } from '@angular/core/testing';

import { AddCusineService } from './add-cusine.service';

describe('AddCusineService', () => {
  let service: AddCusineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCusineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
