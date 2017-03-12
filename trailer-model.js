var Sequelize = require('sequelize'),
    bcrypt = require('bcryptjs'),

    SALT_WORK_FACTOR = 10;

exports.CreateTrailer = function(sequelize) {
    var Trailer = sequelize.define('Trailer', {
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
    })

    return Trailer;
}
