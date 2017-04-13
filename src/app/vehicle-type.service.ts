import { Injectable } from '@angular/core';

@Injectable()
export class VehicleTypeService {

  constructor() { }

  getVehicleTypes() {
    const vehicleTypeTags = [
      'Dry Van',
      'Flat Bed',
      'Reefer Trailer',
      'Container Chassis',
      'Tractor/Condo',
      'Tractor/Daycab'
    ];

    return vehicleTypeTags;
  }
}
