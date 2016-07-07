var UserSchema = require('./../models/UserModel.js');

var createNewUser = function (account, res, next){
  // We will return mongoId after it is created by submitting a newUser
  var mongoId = "";
  // Save StormpathID (last 22 characters of account.href property)
  var newStormpathId = account.href.slice(account.href.length - 22);
  console.log('stormpath ID:', newStormpathId, 'just registered!');
  console.log("new account:", account);
  // Create new user from model by recycling info from the Stormpath registration form and include the stormpathId as well.
  var newUser = new UserSchema({
      stormpathId: newStormpathId,
      firstName: account.givenName,
      lastName: account.surname,
      email: account.email,
  });
  console.log("newUser local", newUser)
  // This saves the user we just created in MongoDB
  newUser.save(function(err, result){
      console.log(result);
      if (err) {
    		console.error(err);
      }
      else {
      	console.log("User created in MongoDB, attempting to return mongoDB _id to stormpath customData");
        // The new user object returned in result contains mongo's _id property which we will pass back to postRegistrationHandler in server.js
        next(null, result._id);
      }
  });
};

module.exports = createNewUser;
