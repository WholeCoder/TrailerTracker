var Sequelize = require('sequelize');
var sequelize = new Sequelize("");//postgres://postgres:pgsGood&Plenty@localhost:5432/postgres");


var User =sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  customer: Sequelize.STRING
});
sequelize.sync().then(function() {

  var users = [{
    "__v": (0),
    "_id": {
      "$oid": "55aa90f1478ac5030035fcb6"
    },
    "activated": true,
    "activationtoken": "qwIoOSEYIyHpHxrT",
    "customer": "ADMIN",
    "loginAttempts": (0),
    "numberofsuccessfullogins": (1133),
    "password": "$2a$10$RzUvxB4cqDrR7fzzoenkPOARVxusmnQGocO/kxaXAS.rl.qX1OitO",
    "username": "service@fleetrep.net"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "55ad91808d202603008ef4c1"
    },
    "activated": true,
      "activationtoken": "jaaik6wLSy8171uX",
      "customer": "ADMIN",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (1269),
      "password": "$2a$10$m3maHBvZ5XNzFk0rlcq0Ou7wwPxRS3K1vTlR50YeVq6b4csXOEWJK",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "dsmelot@gmail.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "55b50b37a8e71e0300f9a078"
    },
    "activated": true,
      "activationtoken": "ETeAJWUOAm4orqir",
      "customer": "ADMIN",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (456),
      "password": "$2a$10$Yi8nEXarfLhxS4.3dCAHJ.SxZCoPh87JmByXrihnE8syjinuyppM2",
      "username": "rpierich@hotmail.com"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "55b686e68a35960300bfb5e0"
    },
    "activated": true,
      "activationtoken": "BFgtuaUIA9OlcfQs",
      "customer": "CONTRACT LEASING CORP.",
      "loginAttempts": (0),
      "password": "$2a$10$RDNYNaVUCd0a6.K4IwVRIu4ct0LKe9pp31h0EPuY/66VISp99nKJ6",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "ggallotto@contractleasing.net "
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "55b689e38a35960300bfb5e1"
    },
    "activated": true,
      "activationtoken": "jl3cqqo5Td7gGe4D",
      "customer": "CR ENGLAND",
      "lockUntil": 1.446226204737e+12,
      "loginAttempts": (5),
      "numberofsuccessfullogins": (1),
      "password": "$2a$10$jNoqjMW7n6ApRaR3LA2qKuuk7Lukb26vtfzPxlZX/gzti6/y8yV8e",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "enadedicatedhershey@crengland.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "55b6a3198a35960300bfb5e4"
    },
    "activated": true,
      "activationtoken": "JUMhEsGmwz0BLSJu",
      "customer": "UNITED PARCEL SERVICE",
      "loginAttempts": (0),
      "password": "$2a$10$SwOL0O2ReKeMgKmrZC04G.YE1U1aLvCXEfixHS/877MjCugf3g0w6",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "hoesterling@ups.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "55b77f148a35960300bfb5ed"
    },
    "activated": true,
      "activationtoken": "fdx0951Ffr8ROilf",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (47),
      "password": "$2a$10$sHLVIYsJS36GDiNp/Z5lUei8QUpk6IHwVW1UFlMdj6JoDEo38oq2.",
      "username": "terry.pace@crengland.com"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "55b93b7f2807210300b83e61"
    },
    "activated": true,
      "activationtoken": "6SoL5rrWoCpVXju0",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "password": "$2a$10$lEpsuQXAuLJaDz.08.u97eRka.Ll58NXPQaonGb41V1Tb82dYkevC",
      "sendemailoncompleted": false,
      "username": "robert.west@crengland.com"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "55b965ad47a3870300d1b170"
    },
    "activated": true,
      "activationtoken": "ShEIVXxc1V4CaFPH",
      "customer": "ADMIN",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (1478),
      "password": "$2a$10$2L1JW/BLrnxF4XcBVqxu4eAurqM0NXLZsFIa6j626LrVlpWL/fuW.",
      "username": "jess"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "55c8adf8cc034d030044b7d7"
    },
    "activated": true,
      "activationtoken": "wnuf6vE9i8jBWiYz",
      "customer": "YRC",
      "loginAttempts": (0),
      "password": "$2a$10$B3xsTE2u2tQncoTajz6kl.yZv2CEJX.hcCv3BedcAIr9Qfv9HAOYO",
      "username": "haggard"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "55d60588a329f40300fcce6b"
    },
    "activated": true,
      "activationtoken": "JYQeSy3K2eXpYhRj",
      "customer": "CR ENGLAND",
      "loginAttempts": (2),
      "password": "$2a$10$woqvITS6dTYfKdQ53p5LLef29d6zNY7HavjmquBgguC26l5QQPyxi",
      "username": "robbielee"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "560ee31103267c0300c03f3c"
    },
    "activated": true,
      "activationtoken": "rtqAmQrRxaAqWPWs",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (32),
      "password": "$2a$10$xKvJW4qjyfLO0wPzts8wZuV8tFXqw1e94YJE7VEv1x56V2ciqhpsO",
      "username": "rob"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "56213175fe60030300b4549f"
    },
    "activated": true,
      "activationtoken": "M4PXV58Sp8s8xTZ1",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (2),
      "password": "$2a$10$cb7f9zRmITqD/rnMFbyyUuJnEwwIfxZXPSyt39/D37Uw0Gg07qGfy",
      "username": "terry"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "56338cfe1933c40300826147"
    },
    "activated": true,
      "activationtoken": "D58UG1T3nx2RE3mK",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (319),
      "password": "$2a$10$ZzhK.JwnsaBYTHFd4pUWDuvbOU5RuerrMRzcvoNEMihshUwDnW5mW",
      "username": "ena"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "56421a7676517f0300182b34"
    },
    "activated": true,
      "activationtoken": "AHwKhZaappBAx3o4",
      "customer": "LOGISTICS \u0026 DISTRIBUTION SERVICES",
      "loginAttempts": (0),
      "password": "$2a$10$ERRMGdAQOWwucb5mYprS3eEqqGBXGVRQQhhZz9jpvl3NXiA5JI.ta",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "bsilvertooth@ldstrucking.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "564c8bad4119900300da33ef"
    },
    "activated": true,
      "activationtoken": "jtNXyVmSlekU2GtJ",
      "customer": "NEW ERA TRANSPORTATION",
      "loginAttempts": (0),
      "password": "$2a$10$DrdxzJQwmaP90RGMPybGjumytdqbAlAnXpcwRvMBFjSEIAeGGRBQi",
      "senddailyemail": false,
      "sendemailoncompleted": true,
      "username": "alen@neweratransportation.com "
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "564ccfa07d87c70300cb72ab"
    },
    "activated": true,
      "activationtoken": "IF2g2Wew71fAsU2v",
      "customer": "CONTRACT LEASING CORP.",
      "loginAttempts": (0),
      "password": "$2a$10$SlOG7BrPsspRJJlnSIrcNeb04uRMvLUzlGMtfVJaAoMAjXZ1dGWNG",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "mike.callahan@sonoco.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "56bdf007b531670300f1cbe7"
    },
    "activated": true,
      "activationtoken": "wat4QLycKjv3wSvq",
      "customer": "CR ENGLAND",
      "lockUntil": 1.456241767344e+12,
      "loginAttempts": (6),
      "numberofsuccessfullogins": (3),
      "password": "$2a$10$VGBQYL9P9qEjj5ongIysvuWDRlUvJjXjsstHVeQouNgZvx/Hfq0ce",
      "username": "jake.owen@crengland.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "56d8380f44b0fa0300f7b6f0"
    },
    "activated": true,
      "activationtoken": "Oz6p8pEjxsKkAfyw",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (2),
      "password": "$2a$10$dXYHA6yJfYRhJ1KU8iqly.O5el0IcAmW1mH9.xpeAN9.8d5i8RVAK",
      "senddailyemail": true,
      "username": "travis.higham@crengland.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "56df36443a177903006c2df8"
    },
    "activated": true,
      "activationtoken": "ja2pZE3zPVulGUlz",
      "customer": "PREMIER TRAILER LEASING",
      "loginAttempts": (0),
      "password": "$2a$10$E2IJ6mfyycgzHr3W5DxazesuWQqRGf5ZBJQwE7bmsA4quX94acoMK",
      "username": "wpierson@premier-us.net"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "56e0427f1204e50300c1a31e"
    },
    "activated": true,
      "activationtoken": "NHWXmujTrSUyFe8U",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "password": "$2a$10$g3ZxrplWzTlEdhdxLRyg.usU9TNuDOdV/va7D5QaUNaoW2f7u4NHW",
      "username": "john.mccarthy@crengland.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "56e1ce799bb3500300d0d75a"
    },
    "activated": true,
      "activationtoken": "5sGrZ3dpygmPu89R",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "password": "$2a$10$KQXrruc3EmuIrh2Nw7vyGOmKIoGuYp8U31Yrd9M1bxlnY4lvVp9QO",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "kenneth.phifer@crengland.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "571a46bc19cfaa030005fd45"
    },
    "activated": true,
      "activationtoken": "NzM5TgEAQKSRF8aQ",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "password": "$2a$10$UfcLB5JPZMenXROzWBDHh.LlOp5F6LZM77AFCRe1TxEp9zZAPEox6",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "lisa.reed@crengland.com"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "57273d301593830300ff7553"
    },
    "activated": true,
      "activationtoken": "B33OVD2ZvqU8udno",
      "customer": "ADMIN",
      "lockUntil": 1.480345819408e+12,
      "loginAttempts": (7),
      "numberofsuccessfullogins": (138),
      "password": "$2a$10$Okg3Xuch/hv0VJD2QRqJ3OsYcATJWGFCgarrFAycvYp.vyw5.PqjC",
      "username": "justins@fleetrep.net"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "573259697aacbf03007db2e3"
    },
    "activated": true,
      "activationtoken": "qmQRVldOi9nsFkro",
      "customer": "CR ENGLAND",
      "loginAttempts": (1),
      "numberofsuccessfullogins": (1),
      "password": "$2a$10$Kp0IRKIS7pdjDVBIeZv0aubTIghdMKZs6NPAnLkBczDYgJi9NjZ0S",
      "username": "admin"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "579a2abc5146db03007aee6e"
    },
    "activated": true,
      "activationtoken": "x15h5vCvjmKtI7J7",
      "customer": "XTRA LEASE",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (4),
      "password": "$2a$10$tIhz9aMWgqzTLfG1pDEG9uYuny.wOhOH2YcF/psDQGBooXIWaWiDC",
      "username": "fchertle@xtra.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "579a39f45146db03007aee6f"
    },
    "activated": true,
      "activationtoken": "hfG6SH1WBDJn4gDZ",
      "customer": "XTRA LEASE",
      "loginAttempts": (0),
      "password": "$2a$10$uhFS1G7NSqdePSSSPBxo0OTW5VQr3ZoAZcQlrEtP3o7GEc8tJ9Ut.",
      "username": "carlisle@xtra.com "
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "579a3f3e5146db03007aee70"
    },
    "activated": true,
      "activationtoken": "9YtBtl68HBiFXPL7",
      "customer": "ADMIN",
      "lockUntil": 1.479334095942e+12,
      "loginAttempts": (6),
      "numberofsuccessfullogins": (93),
      "password": "$2a$10$opqmbbRabiWmysJMafB4tei9rgpu.Y3G93yrAYtoF9z3I7A0Aa1Jq",
      "username": "jillians@fleetrep.net"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "57a0dab9fba529030028cf0b"
    },
    "activated": true,
      "activationtoken": "OdGOapNG70gIfEEm",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (74),
      "password": "$2a$10$jeqdA42F7Sr943xm.eQXauAARWiR.GeAftAlZcPCEnyTvIEA0uiMO",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "chad.arnold@crengland.com"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "57b1e418f8e2bc03001ce0c3"
    },
    "activated": true,
      "activationtoken": "rysW1UFqRxLdMadi",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (3),
      "password": "$2a$10$mntdiU2g.6MGy0MFR6dbH.cHehjgLpAyWkQ9bbxm8cGrs09BvRRfa",
      "username": "cre"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "57d02eb586aee0030047559b"
    },
    "activated": true,
      "activationtoken": "FM67Jjs6Tx8DNolO",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "password": "$2a$10$J6ud1Estl0R2eRefBTTQlOddq9krD2gjycKN09P/L1iP9QEJwJAPe",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "adam.jaberi@crengland.com"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "57d031cbdb569e0300a09686"
    },
    "activated": true,
      "activationtoken": "XnvCaTI1lr7jcUDy",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "password": "$2a$10$076/7fbs/cyAVZyUgynXXuEmVN/9darwo4fEBXNZ0WLAXSjQ5Ti2O",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "collin.wasescha@crengland.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "5818f827ee46a503002c20cb"
    },
    "activated": true,
      "activationtoken": "3UstGg90Y8SaEDuC",
      "customer": "ERB",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (4),
      "password": "$2a$10$Sbg3hlU.dHqFb9fjDFPxPuWyBGpxvMud2GbNRMi6U97axRBOB/gpq",
      "sendemailoncompleted": true,
      "username": "balderson@erbgroup.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "581a1699bd884103006ec4d1"
    },
    "activated": true,
      "activationtoken": "NjoKK97fWpGq6ixu",
      "customer": "XTRA LEASE - ALLENTOWN",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (25),
      "password": "$2a$10$ahuZSW7zXaX7We6HRXHkcuN4Jbhp9KGRsCO8Bl0coLKOu3GKK3I/K",
      "username": "memriss@xtralease.com"
  }, {
    "__v": (0),
      "_id": {
      "$oid": "5858266704589e0400328890"
    },
    "activated": true,
      "activationtoken": "q9VkxgR51QTii9Hg",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (2),
      "password": "$2a$10$KYt79qGIQSdMij1O1RzIAu5USQy.cNnUcnhlXqWbHlnz4j2EjpqIC",
      "senddailyemail": true,
      "sendemailoncompleted": true,
      "username": "kelly.palmer@crengland.com"
  } ,{
    "__v": (0),
      "_id": {
      "$oid": "5872808338d632040068a17a"
    },
    "activated": true,
      "activationtoken": "wscYuDuj83NJgcOp",
      "customer": "CR ENGLAND",
      "loginAttempts": (0),
      "numberofsuccessfullogins": (1),
      "password": "$2a$10$HmkZ9IoTWJUsBzS8jAKNw.cg6cHPKpi5IwG9.tugNrmE37L28KPqq",
      "username": "chris"
  }];
  for (var i = 0; i < users.length; i++) {

    User.upsert(users[i]);

  }
  console.log("Inserted "+users.length+ " Users");
  return users;
}).then(function(jane) {
  console.log('worked-----------------');
}).catch(function(error) {
  console.log("error === "+error);
});
