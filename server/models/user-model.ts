const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;


const CreateUser = function(sequelize) {
	const User = sequelize.define('User', {
	  username: Sequelize.STRING,
	  password: Sequelize.STRING
	},
	{
		instanceMethods: {
			comparePassword: function(candidatePassword, cb) {
		    bcrypt.compare(candidatePassword, this.get('password'), function(err, isMatch) {
		        if (err) return cb(err);
		        cb(null, isMatch);
		    });
			}
		},
		classMethods: {
			findById: function (id, cb) {
				this.findOne({ where:
      									{ 'id': id }
   									}).then(function(user) {
		        // if (err) return cb(err);

		        // make sure the user exists
          if (user) {
            // found the user
            return cb(null, user, null);
          } else {
            console.log('ENDED - ' + 'getAuthenticated');
            console.log('could not find user.');
            return cb(null, null, reasons.NOT_FOUND);
          }


		    }, function(reason) {
  					// rejection
  					console.log('--------- REJECT called - reason == ' + reason);
        		console.log('ENDED - ' + 'in rejection');
				}); // end then for findOne
			},

			getAuthenticated: function(username, password, cb) {
		    this.findOne({ where:
      									{ 'username': username }
   									}).then(function(user) {
		        // if (err) return cb(err);

		        // make sure the user exists
		        if (!user) {
		        		console.log('ENDED - ' + 'getAuthenticated');
		        		console.log('could not find user.');
		            return cb(null, null, reasons.NOT_FOUND);
		        }

		        // test for a matching password
		        user.comparePassword(password, function(err, isMatch) {
		            if (err) return cb(err);

		            // check if the password was a match
		            if (isMatch) {
		            		console.log('success, there was a match! username == ' + user.username);
		            		console.log('		isMatch == ' + isMatch);
				        		console.log('ENDED - ' + 'user.comparePassword - in callback');

  									return cb(null, user);
		            } else
		            {
		            	console.log('isMatch == ' + isMatch);
			        		console.log('ENDED - ' + 'user.comparePassword - in callback');

		            	return cb(null, null, reasons.PASSWORD_INCORRECT);
		            }
  	        		// console.log("ENDED - " + 'user.comparePassword - should never get here');

		        }); // end comparePassword
		    }, function(reason) {
  					// rejection
  					console.log('--------- REJECT called - reason == ' + reason);
        		console.log('ENDED - ' + 'in rejection');
				}); // end then for findOne
			} // end getAuthenticated
		}
	});

	// expose enum on the model, and provide an internal convenience reference
	const reasons = User.failedLogin = {
	    NOT_FOUND: 0,
	    PASSWORD_INCORRECT: 1,
	    MAX_ATTEMPTS: 2
	};

	const hashPasswordHook = function(instance, options, done) {
	  if (!instance.changed('password')) return done();

	  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		  bcrypt.hash(instance.get('password'), salt, function (err, hash) {
		    if (err) return done(err);
		    instance.set('password', hash);
		    done(null, options);
		  });
	  });
	};
	User.beforeCreate(hashPasswordHook);
	User.beforeUpdate(hashPasswordHook);

	return User;
};

export = CreateUser;
