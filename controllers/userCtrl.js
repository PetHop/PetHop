var UserSchema = require('./../models/UserModel.js');

module.exports =
{
  create: function (req, res, next){
    var post = new UserSchema(req.body);
    post.save(function(err, result){
      if(err) {
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },

  read: function (req, res, next){
    UserSchema
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
    UserSchema.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function (req, res, next) {
    UserSchema.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  readById: function (req, res, next) {
    UserSchema.findById(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
