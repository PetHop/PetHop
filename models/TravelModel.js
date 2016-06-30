var mongoose = require('mongoose');

var travelSchema = new mongoose.Schema({
  startDate: {type: Date, required: true},
  endDate: {type: Date, require: true},
  wayPoints: {type: Array},
  comments: {type: String},
  startPoint: {type: String},
  endPoint: {type: String},
  details: {type: String},
  userTraveler: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  userDriver: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Travel', travelSchema);
