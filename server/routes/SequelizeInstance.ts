const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:pgsGood&Plenty@localhost:5432/postgres");

export = sequelize;
