import {Injectable} from '@angular/core';

@Injectable()
export class TrailerService {

  constructor() { }

  getTrailers() {
    return [{'_id': '56382f87ff7831c0487f65ed',
            'unitnumber': '174929',
            'customer': 'CR ENGLAND',
            'account': 'OTR',
            'vehicletype': 'TRACTOR:  CONDO',
            'location': 'FRS - (GRANTVILLE PA)',
            'datersnotified': '', 'dateapproved': '',
            'estimatedtimeofcompletion': '',
            'status1': '100% COMPLETE:  RESERVED',
            'status2': '', 'status3': '',
            'note': 'Was towed in from virginia *****wreck*****',
            '___v': 0, 'whentobearchived': null,
            'dateauthorized': '2016-03-27T21:25:29.044Z',
            'authorizedinitials': 'rmp174929'
            }, {'_id': '56382f87ff7831c0487f65ef', 'unitnumber': '21335', 'customer': 'CR ENGLAND', 'account': 'OTR', 'vehicletype': 'TRAILER:  REEFER VAN', 'location': 'FRS - (GRANTVILLE PA)', 'datersnotified': '10/01/2015', 'dateapproved': '10/07/2015', 'estimatedtimeofcompletion': '10/12/2015', 'status1': '100% COMPLETE:  READY FOR P/U', 'status2': '', 'status3': '', 'note': 'AP# 397905', '___v': 0, 'whentobearchived': null},
                {'_id': '56382f87ff7831c0487f65f0', 'unitnumber': '53090', 'customer': 'CHAMBERSBURG WASTE PAPER', 'account': 'FRS ACCOUNT', 'vehicletype': 'TRAILER:  DRY VAN', 'location': 'FRS - (GRANTVILLE PA)', 'datersnotified': '10/06/2015', 'dateapproved': '10/20/2015', 'estimatedtimeofcompletion': '', 'status1': '100% COMPLETE:  READY FOR P/U', 'status2': '', 'status3': '', 'note': '', '___v': 0, 'whentobearchived': null}];
  }
}
