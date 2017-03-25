var Sequelize = require('sequelize');
var sequelize = new Sequelize("postgres://postgres:pgsGood&Plenty@localhost:5432/postgres");

var Trailer =sequelize.define('Trailer', {
  unitnumber:Sequelize.STRING,
  customer:Sequelize.STRING,
  account:Sequelize.STRING,
  vehicletype:Sequelize.STRING,
  location: Sequelize.STRING,
  datersnotified: Sequelize.DATE,
  estimatedtimeofcompletion:Sequelize.DATE,
  status1: Sequelize.STRING,
  status2:Sequelize.STRING,
  status3:Sequelize.STRING,
  note:Sequelize.STRING,
  dateauthorized:Sequelize.DATE,
  authorizedinitials:Sequelize.STRING

});

sequelize.sync().then(function() {
  var trlrs =  [{"_id":"56382f87ff7831c0487f65ed",
          "unitnumber":"174929",
          "customer":"CR ENGLAND",
          "account":"OTR",
          "vehicletype":"TRACTOR:  CONDO",
          "location":"FRS - (GRANTVILLE PA)",
          "datersnotified":"2016-03-27T21:25:29.044Z","dateapproved":"2016-03-27T21:25:29.044Z",
          "estimatedtimeofcompletion":"2016-03-27T21:25:29.044Z",
          "status1":"100% COMPLETE:  RESERVED",
          "status2":"",
          "status3":"",
          "note":"Was towed in from virginia *****wreck*****",
          "__v":0,"whentobearchived":null,
          "dateauthorized":"2016-03-27T21:25:29.044Z",
          "authorizedinitials":"rmp174929"
          },{"_id":"56382f87ff7831c0487f65ef","unitnumber":"21335","customer":"CR ENGLAND","account":"OTR","vehicletype":"TRAILER:  REEFER VAN","location":"FRS - (GRANTVILLE PA)","datersnotified":"2016-03-27T21:25:29.044Z","dateapproved":"2016-03-27T21:25:29.044Z","estimatedtimeofcompletion":"2016-03-27T21:25:29.044Z","status1":"100% COMPLETE:  READY FOR P/U","status2":"","status3":"","note":"AP# 397905","__v":0,"whentobearchived":null},
              {"_id":"56382f87ff7831c0487f65f0","unitnumber":"53090","customer":"CHAMBERSBURG WASTE PAPER","account":"FRS ACCOUNT","vehicletype":"TRAILER:  DRY VAN","location":"FRS - (GRANTVILLE PA)","datersnotified":"10/06/2015","dateapproved":"10/20/2015","estimatedtimeofcompletion":"2016-03-27T21:25:29.044Z","status1":"100% COMPLETE:  READY FOR P/U","status2":"","status3":"","note":"","__v":0,"whentobearchived":null}];



  for (var i = 0; i < trlrs.length; i++)
    {
      Trailer.upsert(trlrs[i]);
  }

  return trlrs;
}).then(function(jane) {
  console.log('worked-----------------');
});
