import { TestBed } from '@angular/core/testing';

import { AdminUpdateService } from './admin-update.service';

describe('AdminUpdateService', () => {
  let service: AdminUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
