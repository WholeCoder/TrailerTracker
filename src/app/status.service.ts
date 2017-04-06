import {Injectable} from "@angular/core";

@Injectable()
export class StatusService {

  // statuses:String[][] = [
  blankLight:string[] =   ["", "blanklight.png","", ""];

  redLights:string[][] =[
    ["10%  A/W AUTHORIZATION",            "redlight.png","A/W AUTHORIZATION", "10%"],
    ["10%  A/W PARTS",                    "redlight.png","A/W PARTS", "10%"],
    ["10%  A/W ESTIMATE",                 "redlight.png","A/W ESTIMATE", "10%"],
    ["10%  A/W ARRIVAL OF UNIT",          "redlight.png","A/W ARRIVAL OF UNIT", "10%"]];

  yellowLights:string[][] = [
    ["25%  A/W REPAIRS", "yellowlight.png",  "A/W REPAIRS", "25%"],
    ["50%  WORK IN PROGRESS", "yellowlight.png",        "WORK IN PROGRESS", "50%"],
    ["75%  WORK IN PROGRESS", "yellowlight.png",        "WORK IN PROGRESS", "75%"],
    ["90%  A/W FINAL QUALITY CHECK", "yellowlight.png", "A/W FINAL QUALITY CHECK", "90%"]
];
  greenLights:string[][] = [
    ["100% COMPLETE:  IN TRANSIT TO CUSTOMER", "greenlight.png",  "COMPLETE:  IN TRANSIT TO CUSTOMER", "100%"],
    ["100% COMPLETE:  READY FOR P/U", "greenlight.png",           "COMPLETE:  READY FOR P/U", "100%"],
    ["100% COMPLETE:  RELEASED TO CUSTOMER", "greenlight.png",    "COMPLETE:  RELEASED TO CUSTOMER", "100%"],
    ["100% COMPLETE:  DELIVERED TO CUSTOMER", "greenlight.png",   "DELIVERED TO CUSTOMER", "100%"],
    ["100% COMPLETE:  RESERVED", "greenlight.png", "COMPLETE:  RESERVED", "100%"],
    ["100% COMPLETE: STORAGE ONLY / NO MAINTENANCE REQUESTED", "greenlight.png", "COMPLETE: STORAGE ONLY / NO MAINTENANCE REQUESTED", "100%"]
];

  allLights:string[][];

  getAllStatuses() {
    return this.allLights;
  }
  constructor() {
    this.allLights = [];
    this.allLights.push(this.blankLight);

    this.pushAllToAllLights(this.redLights);
    this.pushAllToAllLights(this.yellowLights);
    this.pushAllToAllLights(this.greenLights);
  }

  getGroup(lightPictureName:string){
    if (lightPictureName === 'blanklight.png')
      return [this.blankLight];
    else if (lightPictureName === 'redlight.png')
      return this.copyArray(this.redLights);
    else if (lightPictureName === 'yellowlight.png')
      return this.copyArray(this.yellowLights);
    else if (lightPictureName === 'greenlight.png')
      return this.copyArray(this.greenLights);
  }

  copyArray(aRay)
  {
    let newRay:string[][] = [];
    for (let i = 0; i < aRay.length;i++)
    {
      newRay[i] = aRay[i];
    }
    newRay.unshift(this.blankLight);
    return newRay;
  }

  private pushAllToAllLights(lights:string[][]) {
    for (let i = 0; i < lights.length; i++) {
      this.allLights.push(lights[i]);
    }
  }

}
