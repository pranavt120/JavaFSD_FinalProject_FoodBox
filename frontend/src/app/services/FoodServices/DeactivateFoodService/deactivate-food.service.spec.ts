import { TestBed } from '@angular/core/testing';

import { DeactivateFoodService } from './deactivate-food.service';

describe('DeactivateFoodService', () => {
  let service: DeactivateFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivateFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
