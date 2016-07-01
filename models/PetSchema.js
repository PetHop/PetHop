var mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
  petName: {type: String, required: true},
  petProfileImage: {type: String, default: "http://thumbs.dreamstime.com/thumblarge_2577/25770385.jpg"},
  galleryImages: {type: Array},
  type: {type: String, required: true},
  petSize: {type: String, required: true},
  petBreed: {type: String},
  petDesc: {type: String},
  specialReq: {type: String},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Pets', petSchema);
