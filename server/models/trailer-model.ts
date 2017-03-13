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

export default function defineTrailer(sequelize: Sequelize.Sequelize) {
  var Trailer = sequelize.define('Trailer', {
    unitnumber:Sequelize.DataTypes.STRING,
    customer:Sequelize.DataTypes.STRING,
    account:Sequelize.DataTypes.STRING,
    vehicletype:Sequelize.DataTypes.STRING,
    location: Sequelize.DataTypes.STRING,
    datersnotified: Sequelize.DataTypes.STRING,
    estimatedtimeofcompletion:Sequelize.DataTypes.STRING,
    status1: Sequelize.DataTypes.STRING,
    status2:Sequelize.DataTypes.STRING,
    note:Sequelize.DataTypes.STRING,
    dateauthorized:Sequelize.DataTypes.STRING,
    authorizedinitials:Sequelize.DataTypes.STRING

  });

  return Trailer;
}
