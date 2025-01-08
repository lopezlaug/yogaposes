import { TestBed } from '@angular/core/testing';

import { PosesListService } from './poses-list.service';

describe('PosesListService', () => {
  let service: PosesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
