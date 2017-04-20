import { Injectable } from '@angular/core';

@Injectable()
export class PassTrailerDataService {
  get creationMode(): string {
    return this._creationMode;
  }

  set creationMode(value: string) {
    this._creationMode = value;
  }
  get trailerObject(): Object {
    return this._trailerObject;
  }

  set trailerObject(value: Object) {
    this._trailerObject = value;
  }

  constructor() {
    this.resetAllFields();
  }

  public resetAllFields() {
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
  private _creationMode: string; // This will either be edit or new depending on what we want to do.
}
