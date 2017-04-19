var bcrypt = require('bcryptjs');
    var config = require('./config_db').config;
    var Sequelize = require('sequelize');
    var sequelize = new Sequelize(config.development_database_url);

  exports.Trailer = sequelize.define('Trailer', {
        'id': {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
       "unitnumber": Sequelize.STRING,
       "customer": Sequelize.STRING,
       "account": Sequelize.STRING,
       "vehicletype": Sequelize.STRING,
       "location": Sequelize.STRING,
       "datersnotified": Sequelize.DATE,
       "estimatedtimeofcompletion": Sequelize.DATE,
       "status1": Sequelize.STRING,
       "status2": Sequelize.STRING,
       "status3": Sequelize.STRING,
       "note": Sequelize.STRING,
       "dateauthorized": Sequelize.DATE,
       "authorizedinitials": Sequelize.STRING

  });
