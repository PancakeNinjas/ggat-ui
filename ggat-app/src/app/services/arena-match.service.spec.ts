import {TestBed} from '@angular/core/testing';

import {ArenaMatchService} from './arena-match.service';

describe('ArenaMatchService', () => {
  let service: ArenaMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
