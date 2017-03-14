import { Instance, Sequelize, DataTypes } from '@types/sequelize';
// import * as Ajv from 'sequelize';
// import * as Sequelize from '@types/sequelize';
// let Sequelize = Ajv.

export interface TrailerAttributes {
  unitnumber:string;
  customer: string;
  account:string;
  vehicletype:string;
  location: string;
  datersnotified: string;
  estimatedtimeofcompletion:string;
  status1: string;
  status2: string;
  note: string;
  dateauthorized: string;
  authorizedinitials: string;
}

export interface TrailerInstance extends Instance<TrailerAttributes>, TrailerAttributes {

}

// {
//   // I'm exposing every DB column as an instance field to so that tsc won't complain.
//   id: number;
//   createdAt: Date;
//   updatedAt: Date;
//
//   unitnumber:string;
//   customer: string;
//   account:string;
//   vehicletype:string;
//   location: string;
//   datersnotified: string;
//   estimatedtimeofcompletion:string;
//   status1: string;
//   status2: string;
//   note: string;
//   dateauthorized: string;
//   authorizedinitials: string;
//
// }

export default function defineTrailer(sequelize: Sequelize) {
console.error("********************works****************");
  function printProps(obj)
  {
    var str = "";
    for (var prop in obj)
    {
      str += prop + '    ' + obj[prop] + '\n';
    }
    console.log("props == "+str);
  }
  console.log('*****************************');
  printProps(sequelize);
  console.log('****************(new)');

  var Trailer =sequelize.define('Trailer', {
    unitnumber:"string",
    customer:"string",
    account:"string",
    vehicletype:"string",
    location: "string",
    datersnotified: "string",
    estimatedtimeofcompletion:"string",
    status1: "string",
    status2:"string",
    note:"string",
    dateauthorized:"string",
    authorizedinitials:"string"

  });

  return Trailer;
}
