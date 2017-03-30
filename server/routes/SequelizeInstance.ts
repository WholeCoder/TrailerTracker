const config = require('../config_db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.get_correct_db_url());

export = sequelize;
