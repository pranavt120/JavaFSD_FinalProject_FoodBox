import { TestBed } from '@angular/core/testing';

import { DeleteFoodService } from './delete-food.service';

describe('DeleteFoodService', () => {
  let service: DeleteFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
