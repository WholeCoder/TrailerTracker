import { Injectable } from '@angular/core';

@Injectable()
export class PassTrailerDataService {
  get trailerObject(): Object {
    return this._trailerObject;
  }

  set trailerObject(value: Object) {
    this._trailerObject = value;
  }

  constructor() {
    this._trailerObject = {
      unitnumber: [''],
      customer: [''],
      account: [''],
      vehicletype: [''],
      location: [''],
      datersnotified: [''],
      estimatedtimeofcompletion: [''],
      status1: [''],
      status2: [''],
      status3: [''],
      note: [''],
      dateauthorized: [''],
      authorizedinitials: ['']
    };
  }

  private _trailerObject: Object;
}
