import { TestBed } from '@angular/core/testing';

import { NFTStorageService } from './nftstorage.service';

describe('NFTStorageService', () => {
  let service: NFTStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NFTStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
