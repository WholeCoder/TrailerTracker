var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:pgsGood&Plenty@localhost:5432/postgres');


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

});

sequelize.sync().then(function() {
  return Trailer.create({

            "unitnumber":"174929",
            "customer":"CR ENGLAND",
            "account":"OTR",
            "vehicletype":"TRACTOR:  CONDO",
            "location":"FRS - (GRANTVILLE PA)",
            "datersnotified":"","dateapproved":"",
            "estimatedtimeofcompletion":"",
            "status1":"100% COMPLETE:  RESERVED",
            "status2":"","status3":"",
            "note":"Was towed in from virginia *****wreck*****",
            "whentobearchived":null,
            "dateauthorized":"2016-03-27T21:25:29.044Z",
            "authorizedinitials":"rmp174929"

  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
