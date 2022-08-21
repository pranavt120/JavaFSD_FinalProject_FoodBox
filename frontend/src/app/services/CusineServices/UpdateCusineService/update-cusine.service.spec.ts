import { TestBed } from '@angular/core/testing';

import { UpdateCusineService } from './update-cusine.service';

describe('UpdateCusineService', () => {
  let service: UpdateCusineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCusineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
