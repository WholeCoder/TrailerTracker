import * as Sequelize from 'sequelize';

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

export interface TrailerInstance extends Sequelize.Instance<TrailerAttributes> {
  // I'm exposing every DB column as an instance field to so that tsc won't complain.
  id: number;
  createdAt: Date;
  updatedAt: Date;

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

export default function defineTrailer(sequelize: Sequelize.Sequelize, DataTypes) {
  var Trailer = sequelize.define('Trailer', {
    unitnumber:Sequelize.STRING,
    customer: Sequelize.STRING,
    account:Sequelize.STRING,
    vehicletype:Sequelize.STRING,
    location: Sequelize.STRING,
    datersnotified: Sequelize.STRING,
    estimatedtimeofcompletion:Sequelize.STRING,
    status1: Sequelize.STRING,
    status2: Sequelize.STRING,
    note: Sequelize.STRING,
    dateauthorized: Sequelize.STRING,
    authorizedinitials: Sequelize.STRING

  });

  return Trailer;
}
