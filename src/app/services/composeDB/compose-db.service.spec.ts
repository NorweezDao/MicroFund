import { TestBed } from '@angular/core/testing';

import { ComposeDBService } from './compose-db.service';

describe('ComposeDBService', () => {
  let service: ComposeDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
