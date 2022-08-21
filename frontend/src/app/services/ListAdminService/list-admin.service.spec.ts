import { TestBed } from '@angular/core/testing';

import { ListAdminService } from './list-admin.service';

describe('ListAdminService', () => {
  let service: ListAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
