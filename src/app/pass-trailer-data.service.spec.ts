import { TestBed, inject } from '@angular/core/testing';

import { PassTrailerDataService } from './pass-trailer-data.service';

describe('PassTrailerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassTrailerDataService]
    });
  });

  it('should ...', inject([PassTrailerDataService], (service: PassTrailerDataService) => {
    expect(service).toBeTruthy();
  }));
});
