var Sequelize = require('sequelize');
var sequelize = new Sequelize("postgres://postgres:pgsGood&Plenty@localhost:5432/postgres");

module.exports = sequelize;
