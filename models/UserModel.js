var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  stormpathId: {type: String},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  userImg: {type: String},
  dateRegistered: {type: Date, default: Date.now},
  street: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zip: {type: Number, required: true},
  phone: {type: Number},
  pets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pets'}],
  vehicle: {type: String},
  vehicleColor: {type: String},
  make: {type: String},
  model: {type: String},
  year: {type: String},
  vehicleImg: {type: String},
  // Reference ID of trips traveling, use .populate in GET when the info is needed together
  animalBeingSent: [{type: mongoose.Schema.Types.ObjectId, ref: 'Travel'}]
  // perhaps later
  // tripsOffered: [{type: mongoose.Schema.Types.ObjectId, ref: 'Travel'}]
});

module.exports = mongoose.model('User', userSchema);
