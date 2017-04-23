import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return [{'id': 10,
      'username': 'dummy.username@pierichwebit.com',
      'customer': 'CR ENGLAND'
    }];
  }

}
