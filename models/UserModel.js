var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  stormpathId: {type: String, required: true},  // Just another way to link the authorization to a user account in case Stormpath info is somehow lost.
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String},   // FOR SPAM!
  userImg: {type: String}, // A user's profile image (url)
  bigImg: {type: String},  // A big background image for use on profile and trip requests (url)
  dateRegistered: {type: Date, default: Date.now}, // useful? to be determined...
  street: {type: String}, // Standard address stuff. Maybe useful someday.
  city: {type: String},
  state: {type: String},
  zip: {type: Number},
  phone: {type: String}, // More contact info that would theoretically be useful.
  pets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pets'}], // Array of pets that the user creates/owns.
  vehicleType: {type: String},  // A person offering to transport can share their vehicle information.
  vehicleColor: {type: String},
  make: {type: String},
  model: {type: String},
  year: {type: String},
  vehicleImg: {type: String}, // Image of a vehicle so the hitchers will be able to recognize when their ride has arrived.
  // Reference ID of trips traveling, use .populate in GET when the info is needed together
  animalBeingSent: [{type: mongoose.Schema.Types.ObjectId, ref: 'Travel'}]
  // perhaps later
  // tripsOffered: [{type: mongoose.Schema.Types.ObjectId, ref: 'Travel'}]
});

module.exports = mongoose.model('User', userSchema);
