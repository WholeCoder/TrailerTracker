import { Sequelize, DataTypes } from 'sequelize';

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

export interface TrailerInstance extends Sequelize.Instance<TrailerInstance,TrailerAttributes>, TrailerAttributes {

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
  printProps(DataTypes);
  console.log('****************(new)');

  var Trailer =sequelize.define('Trailer', {
    unitnumber:DataTypes.STRING(),
    customer:DataTypes.STRING(),
    account:DataTypes.STRING(),
    vehicletype:DataTypes.STRING(),
    location: DataTypes.STRING(),
    datersnotified: DataTypes.STRING(),
    estimatedtimeofcompletion:DataTypes.STRING(),
    status1: DataTypes.STRING(),
    status2:DataTypes.STRING(),
    note:DataTypes.STRING(),
    dateauthorized:DataTypes.STRING(),
    authorizedinitials:DataTypes.STRING()

  });

  return Trailer;
}
