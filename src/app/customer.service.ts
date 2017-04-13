import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  constructor() { }

  getCustomers() {
    let  customerTypeTags = [
      "ADMIN",
      "CHAMBERSBURG WASTE PAPER",
      "CONTRACT LEASING CORP.",
      "CR ENGLAND",
      "EMERGENCY BREAKDOWN SERVICE",
      "FORWARD AIR, INC.",
      "LOGISTICS & DISTRIBUTION SERVICES",
      "NEW ERA TRANSPORTATION",
      "PREMIER TRAILER LEASING",
      "ROAD & RAIL SERVICES",
      "UNITED PARCEL SERVICE",
      "WESTERN  EXPRESS INC.",
      "WHITE ARROW"
    ];

    return customerTypeTags;
  }
}
