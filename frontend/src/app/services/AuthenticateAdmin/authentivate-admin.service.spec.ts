import { TestBed } from '@angular/core/testing';

import { AuthentivateAdminService } from './authentivate-admin.service';

describe('AuthentivateAdminService', () => {
  let service: AuthentivateAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentivateAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
