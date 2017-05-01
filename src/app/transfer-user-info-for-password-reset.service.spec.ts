import { TestBed, inject } from '@angular/core/testing';

import { TransferUserInfoForPasswordResetService } from './transfer-user-info-for-password-reset.service';

describe('TransferUserInfoForPasswordResetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferUserInfoForPasswordResetService]
    });
  });

  it('should ...', inject([TransferUserInfoForPasswordResetService], (service: TransferUserInfoForPasswordResetService) => {
    expect(service).toBeTruthy();
  }));
});
