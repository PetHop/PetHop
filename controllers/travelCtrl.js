var TravelModel = require('./../models/TravelModel.js');

module.exports =
{
  create: function (req, res, next){
    var post = new TravelModel(req.body);
    post.save(function(err, result){
      if(err) {
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },

  read: function (req, res, next){
    TravelModel
    .find()
    .populate('animalTraveler')
    .populate('userDriver')
    .exec(function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  update: function (req, res, next){
    TravelModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function (req, res, next) {
    TravelModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  readById: function (req, res, next) {
    TravelModel.findById(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
