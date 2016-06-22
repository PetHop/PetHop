var TravelSchema = require('./../models/TravelModel.js');

module.exports =
{
  create: function (req, res, next){
    var post = new TravelSchema(req.body);
    post.save(function(err, result){
      if(err) {
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },

  read: function (req, res, next){
    TravelSchema
    .find()
    .exec(function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  update: function (req, res, next){
    TravelSchema.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function (req, res, next) {
    TravelSchema.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  readById: function (req, res, next) {
    TravelSchema.findById(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
