var bcrypt = require('bcryptjs');
    var config = require('./config_db').config;
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize(config.database_url);

  exports.Trailer = sequelize.define('Trailer', {

       "unitnumber": Sequelize.STRING,
       "customer": Sequelize.STRING,
       "account": Sequelize.STRING,
       "vehicletype": Sequelize.STRING,
       "location": Sequelize.STRING,
       "datersnotified": Sequelize.STRING,
       "estimatedtimeofcompletion": Sequelize.STRING,
       "status1": Sequelize.STRING,
       "status2": Sequelize.STRING,
       "note": Sequelize.STRING,
       "dateauthorized": Sequelize.STRING,
       "authorizedinitials": Sequelize.STRING

  });
