import { TestBed } from '@angular/core/testing';

import { UpdateFoodService } from './update-food.service';

describe('UpdateFoodService', () => {
  let service: UpdateFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
