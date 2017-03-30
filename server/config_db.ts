const DISABLE_SSL = process.env.ENVIRONMENT == 'local_development';
const ENVIRONMENT = process.env.ENVIRONMENT;

export = {
  "development_database_url": "postgres://postgres:pgsGood&Plenty@localhost:5432/postgres",
  "get_correct_db_url": function() {
    let postgresconnectionstring = "mongodb://localhost/test";

    if (DISABLE_SSL && ENVIRONMENT == 'local_development') // on development
    {
      console.log("!!!!!!!DISABLE_SSL was set - admin app won't be encrypted!!!!!!")
      console.log("setting connection to local mongodb!!!!!!!!!!!!");
      postgresconnectionstring = this.development_database_url;
    } else if (ENVIRONMENT == 'remote_development') // on testing site
    {
      postgresconnectionstring = "";
    } else if (ENVIRONMENT == 'production') {
      require('newrelic');
      postgresconnectionstring = "";
    } else {
      console.log("!!CONFIG ERROR - ENVIRONMENT system variable not found.  Can not set mongodb variable!!!!")
    }
    return postgresconnectionstring;
  }
}
// sudo -u postgres psql
//    - how to log into database from command line
