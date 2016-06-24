var PetSchema = require('./../models/PetSchema.js');

module.exports = {

  create: function(req, res, next) {
    var pet = new PetSchema(req.body);
    pet.save(function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  read: function(req, res, next) {
    PetSchema.find().exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  update: function(req, res, next) {
    PetSchema.findByIdAndUpdate(req.params.id, req.body,
      function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function(req, res, next) {
    PetSchema.findByIdAndRemove(req.params.id, req.body,
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  readById: function (req, res, next) {
    PetSchema.findById(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
