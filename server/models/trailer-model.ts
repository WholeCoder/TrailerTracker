import {Instance, Sequelize} from "@types/sequelize";

export interface TrailerAttributes {
  unitnumber:string;
  customer: string;
  account:string;
  vehicletype:string;
  location: string;
  datersnotified: Date;
  estimatedtimeofcompletion: Date;
  status1: string;
  status2: string;
  status3: string;
  note: string;
  dateauthorized: Date;
  authorizedinitials: string;
}

export interface TrailerInstance extends Instance<TrailerAttributes>, TrailerAttributes {

}


export default function defineTrailer(sequelize: Sequelize) {

  var Trailer =sequelize.define('Trailer', {
    unitnumber:"string",
    customer:"string",
    account:"string",
    vehicletype:"string",
    location: "string",
    datersnotified: "date",
    estimatedtimeofcompletion:"date",
    status1: "string",
    status2:"string",
    status3:"string",
    note:"string",
    dateauthorized:"date",
    authorizedinitials:"string"

  });

  return Trailer;
}
