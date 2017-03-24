const config = require('../config_db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database_url);

export = sequelize;
