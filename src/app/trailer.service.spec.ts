import { TestBed, inject } from '@angular/core/testing';

import { TrailerService } from './trailer.service';

describe('TrailerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrailerService]
    });
  });

  it('should ...', inject([TrailerService], (service: TrailerService) => {
    expect(service).toBeTruthy();
  }));
});
