var DATABASE_URL = 'postgres://postgres:pgsGood&Plenty@localhost:5432/postgres',
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(DATABASE_URL),
    User = require('./user-model').CreateUser(sequelize);

sequelize.sync().then(function() {
  return User.create({
    username: 'rpierich@hotmail.com',
    password: 'asdf'
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
