import { TestBed } from '@angular/core/testing';

import { ApNavService } from './ap-nav.service';

describe('UiLibService', () => {
  let service: ApNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
