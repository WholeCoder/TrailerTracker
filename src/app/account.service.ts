import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }

  getDefaultAccounts() {
    const availableTags = [
      'Dedicated: Other Than Hershey',
      'Dedicated Hershey',
      'Unknown',
      'OTR',
      'Intermodal'
    ];

    return availableTags;
  }
}
