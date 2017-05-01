import { Injectable } from '@angular/core';

@Injectable()
export class TransferUserInfoForPasswordResetService {
  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  private _id: Number;
  private _username: string;

  constructor() { }
}
