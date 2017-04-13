import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  constructor() { }

  getLocations() {
    const locationsTags = [
      'HERSHEY-EDC3 (PALMYRA PA)',
      'WEST HERSHEY - (HERSHEY PA)',
      'HERSHEY-Y & S CANDIES (Lancaster PA)',
      'HERSHEY-REESE\'S (HERSHEY PA)',
      'AMERICOLD-MANCHESTER (MANCHESTER PA)',
      'CRESCENT (MECHANICSBURG PA)',
      'HERSHY-HAZLETON (HAZLETON PA)',
      'AMERICOLD-FOGLESVILLE (FOGELSVILLE PA)',
      'VANTAGE FOODS (CAMP HILL PA)',
      'WAKEFERN FOODS (BREINIGSVILLE PA)',
      'GEORGIA PACIFIC (QUAKERTOWN PA)',
      'KEYSTONE FOOD (EASTON PA)',
      'GEORGIA PACIFIC (EASTON PA)',
      'GEORGIA PACIFIC (MILFORD NJ 08332)',
      'WALMART DC (TOBYHANNA PA)',
      'SAM ADAMS (BREINIGSVILLE PA)',
      'CR ENGLAND DROP LOT (MECHANICSBURG PA)',
      'AMAZON HAZLETON (HAZLETON PA)',
      'UPS - ALLENTOWN (ALLENTOWN PA)',
      'UPS - HARRISBURG (HARRISBURG PA)',
      'UPS - STEELTON (STEELTON PA)',
      'UPS - SCRANTON (SCRANTON PA)',
      'SONOCO (RESESONIS PA)',
      'YRC (CARLISLE PA)',
      'PET SMART (BETHEL PA)',
      'FRS - (GRANTVILLE PA)'
    ];

    return locationsTags;
  }
}
